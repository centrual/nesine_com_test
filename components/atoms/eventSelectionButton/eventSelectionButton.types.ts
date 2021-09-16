import { Event, Outcome, OutcomeGroup } from '@atoms/event/event.types'

interface EventSelectionButtonProps {
  isSelected?: boolean

  event: Event
  outcomeGroup: OutcomeGroup
  outcome: Outcome

  onClick?: (
    event: Event,
    outcomeGroup: OutcomeGroup,
    outcome: Outcome,
    isSelectedCurrently: boolean
  ) => void
}

export type { EventSelectionButtonProps }
