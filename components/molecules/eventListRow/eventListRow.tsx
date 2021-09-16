import { memo } from 'react'
import type { EventListRowProps } from '@molecules/eventListRow/eventListRow.types'
import { RowType } from '@molecules/eventListRow/eventListRow.types'
import { Event } from '@atoms/event/event'
import { LeagueNameHeader } from '@atoms/leagueNameHeader/leagueNameHeader'
import { DayNameHeader } from '@atoms/dayNameHeader/dayNameHeader'
import Styles from './eventListRow.module.scss'

const EventListRow = memo<EventListRowProps>((props) => {
  const { rowType, style } = props

  let content: JSX.Element | null = null

  switch (rowType) {
    case RowType.EVENT:
      const { event } = props
      content = <Event event={event} />
      break
    case RowType.LEAGUE_NAME:
      const { leagueName } = props
      content = <LeagueNameHeader leagueName={leagueName} />
      break
    case RowType.FIXTURE_DAY:
      const { dayName, date } = props
      content = <DayNameHeader date={date} dayName={dayName} />
      break
  }

  return (
    <div className={Styles.eventListRow} style={style}>
      {content}
    </div>
  )
})

EventListRow.displayName = 'EventListRow'

export { EventListRow }
