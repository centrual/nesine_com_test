import type { NextApiRequest, NextApiResponse } from 'next'
import mongoDbConnection from '../../lib/mongoDbConnection'
import { Filter } from 'mongodb'
import type {
  GetMatchesRequestData,
  GetMatchesResponseData,
} from './getMatches.types'
import { DBEventsProjection } from './getMatches.types'
import { mapDbEventToEvent } from '../../lib/mappers/eventMapper'

const getMatchesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetMatchesResponseData>
): Promise<void> => {
  const data = req.query as unknown as GetMatchesRequestData
  const fetchAfterEventCode = parseInt(data.lastEventCode)

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
    .sort({ ESD: 'asc', C: 'asc' })
    .limit(31)
    .toArray()

  if (eventsInDb.length === 31) {
    eventsInDb.pop()
  }

  if (eventsInDb.length > 0) {
    lastEventCode = eventsInDb[eventsInDb.length - 1].ESD
  }

  res.status(200).json({
    lastEventCode,
    moreEventsAvailable: lastEventCode != null,
    events: eventsInDb.map(mapDbEventToEvent),
  })
}

export default getMatchesHandler
