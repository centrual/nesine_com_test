import { Event } from '@atoms/event/event.types'
import { CSSProperties } from 'react'

export enum RowType {
  FIXTURE_DAY = 'fixture_day',
  LEAGUE_NAME = 'league_name',
  EVENT = 'event',
}

interface EventListRowBase {
  rowType?: RowType
  style?: CSSProperties
  dayName?: string
  date?: string
  leagueName?: string
  event?: Event
}

interface EventListRowFixtureDay {
  rowType: RowType.FIXTURE_DAY
  dayName: string
  date: string
}

interface EventListRowLeagueName {
  rowType: RowType.LEAGUE_NAME
  leagueName: string
}

interface EventListRowEvent {
  rowType: RowType.EVENT
  event: Event
}

type EventListRowProps = EventListRowBase &
  (EventListRowFixtureDay | EventListRowEvent | EventListRowLeagueName)

export type {
  EventListRowFixtureDay,
  EventListRowEvent,
  EventListRowLeagueName,
  EventListRowProps,
}
