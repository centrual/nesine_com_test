import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Event } from '@components/eventsGrid/eventsGrid.types'

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
  addEvent: (event: Event, outcomeGroupId: string, outcomeId: string) => void
  removeEvent: (eventCode: number) => void
}

export type { SelectedEvent, CouponProviderProps }
