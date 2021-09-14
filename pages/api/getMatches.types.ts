import { Event } from '@components/eventsGrid/eventsGrid.types'

interface GetMatchesRequestData {
  lastEventCode: string
}

interface GetMatchesResponseData {
  events: Event[]
  moreEventsAvailable: boolean
  lastEventCode: number | null
}

interface DBEventOutcome {
  ID: string
  O: string
  N: string
  MBS: string
  G: string
  P: string
  BWPC: string
  OD: number
  IMF: boolean
}

interface DBEventOutcomeGroup {
  ID: string
  N: string
  ESD: string
  ED: string
  D: string
  T: string
  MBS: string
  SO: number
  OC: DBEventOutcome[]
}

interface DBEventsProjection {
  _id: string
  C: number
  N: string
  ESD: number
  D: string
  T: string
  DAY: string
  LN: string
  OCG: DBEventOutcomeGroup[]
}

export type {
  GetMatchesRequestData,
  GetMatchesResponseData,
  DBEventOutcome,
  DBEventOutcomeGroup,
  DBEventsProjection,
}
