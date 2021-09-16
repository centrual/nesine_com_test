import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Event } from '@atoms/event/event.types'

interface SelectedEvent {
  code: number
  outcomeGroupId: string
  outcomeGroupName: string
  outcomeId: string
  outcomeName: string
  outcomeRate: string
  competitors: string
  time: string
  date: string
  dayName: string
}

interface CouponSelectionProviderProps {
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
  isOpened: boolean
  setIsOpened: Dispatch<SetStateAction<boolean>>
}

export type { SelectedEvent, CouponSelectionProviderProps }
