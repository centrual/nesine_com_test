import { memo, useContext } from 'react'
import type { OutcomeGroupSelectionsProps } from './outcomeGroupSelections.types'
import { EventSelectionButton } from '@atoms/eventSelectionButton/eventSelectionButton'
import { Event, Outcome, OutcomeGroup } from '@atoms/event/event.types'
import { CouponSelectionProviderProps } from '@providers/couponSelectionProvider/couponSelectionProvider.types'
import { CouponSelectionContext } from '@providers/couponSelectionProvider/couponSelectionProvider'

const OutcomeGroupSelections = memo<OutcomeGroupSelectionsProps>((props) => {
  const { event, outcomeGroup } = props
  const couponContext = useContext(
    CouponSelectionContext
  ) as CouponSelectionProviderProps

  const toggle = (
    event: Event,
    outcomeGroup: OutcomeGroup,
    outcome: Outcome
  ) => {
    console.log(event.matchCode)
    console.log(outcomeGroup.groupId)
    console.log(outcome.optionId)
    couponContext.toggleEvent(event, outcomeGroup.groupId, outcome.optionId)
  }

  return (
    <>
      {outcomeGroup.outcomes.map((outcome) => {
        return (
          <EventSelectionButton
            key={`${event.matchId}${outcomeGroup.groupId}${outcome.optionId}`}
            event={event}
            outcomeGroup={outcomeGroup}
            outcome={outcome}
            onClick={toggle}
            isSelected={couponContext.isSelected(
              event,
              outcomeGroup.groupId,
              outcome.optionId
            )}
          />
        )
      })}
    </>
  )
})

OutcomeGroupSelections.displayName = 'OutcomeGroupSelections'

export { OutcomeGroupSelections }
