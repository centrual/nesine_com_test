import type { NextApiRequest, NextApiResponse } from 'next'
import mongoDbConnection from '../../lib/mongoDbConnection'
import { Filter } from 'mongodb'
import type {
  DBEventsProjection,
  GetMatchesRequestData,
  GetMatchesResponseData,
} from './getEvents.types'
import { mapDbEventToEvent } from '../../lib/mappers/eventMapper'

const getEventsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetMatchesResponseData>
): Promise<void> => {
  const data = req.query as unknown as GetMatchesRequestData
  const fetchAfterEventCode = parseInt(data.lastEventCode)

  console.log(fetchAfterEventCode)

  const connection = await mongoDbConnection
  const collection = connection
    .db('nesine_data')
    .collection<DBEventsProjection>('events')
  let eventsDbQueryFilter: Filter<DBEventsProjection> = {}

  let lastEventCode: null | number = null

  if (!isNaN(fetchAfterEventCode) && fetchAfterEventCode > 0) {
    eventsDbQueryFilter = {
      C: {
        $gt: fetchAfterEventCode,
      },
    }
  }

  const eventsInDb = await collection
    .find(eventsDbQueryFilter)
    .project<DBEventsProjection>({
      _id: 1,
      C: 1,
      N: 1,
      D: 1,
      T: 1,
      ESD: 1,
      DAY: 1,
      LN: 1,
      OCG: 1,
    })
    .sort({ ESD: 'asc', T: 'asc', C: 'asc' })
    .limit(51)
    .toArray()

  if (eventsInDb.length === 51) {
    eventsInDb.pop()
  }

  if (eventsInDb.length > 0) {
    lastEventCode = eventsInDb[eventsInDb.length - 1].C
  }

  res.status(200).json({
    lastEventCode,
    moreEventsAvailable: lastEventCode != null,
    events: eventsInDb.map(mapDbEventToEvent),
  })
}

export default getEventsHandler
