import { memo } from 'react'
import { EventSelectionButtonProps } from '@atoms/eventSelectionButton/eventSelectionButton.types'
import Styles from './eventSelectionButton.module.scss'
import classNames from 'classnames'

const EventSelectionButton = memo<EventSelectionButtonProps>((props) => {
  const { event, outcomeGroup, outcome, isSelected, onClick } = props

  const _isSelected = isSelected ?? false
  const _onClickHandler = () => {
    onClick?.(event, outcomeGroup, outcome, _isSelected)
  }

  return (
    <div
      className={classNames(Styles.button, { [Styles.active]: _isSelected })}
      onClick={_onClickHandler}
    >
      {outcome.optionName}
    </div>
  )
})

EventSelectionButton.displayName = 'EventSelectionButton'

export { EventSelectionButton }
