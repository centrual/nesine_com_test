interface Outcome {
  optionId: string
  optionName: string
  rate: string
}

interface OutcomeGroup {
  groupId: string
  name: string
  outcomes: Outcome[]
}

interface Event {
  matchId: string
  matchCode: number
  unixTimestamp: number
  date: string
  time: string
  day: string
  leagueName: string
  competitors: string
  outcomeGroups: OutcomeGroup[]
}

interface EventProps {
  event: Event
}

export type { EventProps, Event, OutcomeGroup, Outcome }
