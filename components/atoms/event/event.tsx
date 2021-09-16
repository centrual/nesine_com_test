import { memo } from 'react'
import { EventProps } from './event.types'
import Styles from './event.module.scss'
import { OutcomeGroupSelections } from '@atoms/outcomeGroupSelections/outcomeGroupSelections'

const Event = memo<EventProps>((props) => {
  const { event } = props

  return (
    <div className={Styles.event}>
      <div className={Styles.eventCode}>{event.matchCode}</div>
      <div className={Styles.eventTime}>{event.time}</div>
      <div className={Styles.competitorsName}>{event.competitors}</div>
      {event.outcomeGroups.map((outcomeGroup) => {
        return (
          <OutcomeGroupSelections
            key={`${event.matchId}${outcomeGroup.groupId}`}
            outcomeGroup={outcomeGroup}
            event={event}
          />
        )
      })}
    </div>
  )
})

Event.displayName = 'Event'

export { Event }
