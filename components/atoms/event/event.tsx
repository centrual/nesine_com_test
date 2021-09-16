import { memo } from 'react'
import { EventProps } from './event.types'
import Styles from './event.module.scss'
import { OutcomeGroupSelections } from '@atoms/outcomeGroupSelections/outcomeGroupSelections'
import { useWindowSize } from '../../../hooks/useWindowSize'

const Event = memo<EventProps>((props) => {
  const { event } = props
  const { width } = useWindowSize()

  const renderSelectionOptions = () => {
    const content = event.outcomeGroups.map((outcomeGroup) => {
      return (
        <OutcomeGroupSelections
          key={`${event.matchId}${outcomeGroup.groupId}`}
          outcomeGroup={outcomeGroup}
          event={event}
        />
      )
    })

    if (width != null && width <= 768) {
      return <div className={Styles.secondLineSelectionOptions}>{content}</div>
    }

    return content
  }

  return (
    <div className={Styles.event}>
      <div className={Styles.eventInfo}>
        <div className={Styles.eventCode}>{event.matchCode}</div>
        <div className={Styles.eventTime}>{event.time}</div>
        <div className={Styles.competitorsName}>{event.competitors}</div>
      </div>
      {renderSelectionOptions()}
    </div>
  )
})

Event.displayName = 'Event'

export { Event }
