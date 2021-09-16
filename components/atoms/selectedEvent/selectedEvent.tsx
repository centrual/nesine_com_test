import { memo } from 'react'
import { SelectedEventProps } from '@atoms/selectedEvent/selectedEvent.types'
import Styles from './selectedEvent.module.scss'

const SelectedEvent = memo<SelectedEventProps>((props) => {
  const { selectedEvent, onDeleteButtonClicked } = props

  const _onDeleteButtonClicked = () => {
    onDeleteButtonClicked?.(selectedEvent)
  }

  return (
    <div className={Styles.selectedEvent}>
      <div className={Styles.competitorsAndDate}>
        <div>{selectedEvent.competitors}</div>
        <div>
          {selectedEvent.date} - {selectedEvent.time} ({selectedEvent.dayName})
        </div>
      </div>
      <div className={Styles.outcomeInfo}>
        <div>{selectedEvent.outcomeGroupName}</div>
        <div>{selectedEvent.outcomeName}</div>
      </div>
      <div className={Styles.deleteArea}>
        <div className={Styles.deleteButton} onClick={_onDeleteButtonClicked}>
          Sil
        </div>
      </div>
    </div>
  )
})

SelectedEvent.displayName = 'SelectedEvent'

export { SelectedEvent }
