import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Event } from '@atoms/event/event.types'

interface SelectedEvent {
  code: number
  selectedOutcomeGroupId: string
  selectedOutcomeId: string
  selectedOutcomeName: string
  selectedOutcomeRate: string
}

interface CouponProviderProps {
  children: ReactNode
  cumulativeRate: string
  selectedEvents: SelectedEvent[]
  setSelectedEvents: Dispatch<SetStateAction<SelectedEvent[]>>
  isSelected: (
    event: Event,
    outcomeGroupId: string,
    outcomeId: string
  ) => boolean
  toggleEvent: (event: Event, outcomeGroupId: string, outcomeId: string) => void
  removeEvent: (eventCode: number) => void
}

export type { SelectedEvent, CouponProviderProps }
