import React, { createContext, useEffect, useState } from 'react'
import {
  CouponProviderProps,
  SelectedEvent,
} from '@providers/couponProvider.types'
import type { Event } from '@atoms/event/event.types'
import BigNumber from 'bignumber.js'
import { mapEventToSelectedEvent } from '../lib/mappers/eventMapper'

export const CouponContext = createContext<Partial<CouponProviderProps>>({})

const CouponProvider = ({
  children,
}: Partial<CouponProviderProps>): JSX.Element => {
  const [cumulativeRate, setCumulativeRate] = useState<string>('0')
  const [selectedEvents, setSelectedEvents] = useState<SelectedEvent[]>([])

  useEffect(() => {
    const calculatedCumulativeRate = new BigNumber(0)

    selectedEvents.forEach((event: SelectedEvent) => {
      if (calculatedCumulativeRate.eq(0)) {
        calculatedCumulativeRate.plus(event.selectedOutcomeRate)
      } else {
        calculatedCumulativeRate.multipliedBy(event.selectedOutcomeName)
      }
    })

    setCumulativeRate(calculatedCumulativeRate.toFixed(2))
  }, [selectedEvents])

  const removeEvent = (eventCode: number): void => {
    setSelectedEvents(selectedEvents.filter((f) => f.code !== eventCode))
  }

  const toggleEvent = (
    event: Event,
    outcomeGroupId: string,
    outcomeId: string
  ): void => {
    const existingEventIndex = selectedEvents.findIndex(
      (f) => f.code === event.matchCode
    )

    const selectedEvent = mapEventToSelectedEvent(
      event,
      outcomeGroupId,
      outcomeId
    )

    if (existingEventIndex > -1) {
      const firstPart = selectedEvents.slice(0, existingEventIndex)
      const secondPart = selectedEvents.slice(
        existingEventIndex + 1,
        selectedEvents.length - 1
      )

      const existingEvent = selectedEvents[existingEventIndex]

      if (
        existingEvent.selectedOutcomeGroupId === outcomeGroupId &&
        existingEvent.selectedOutcomeId === outcomeId
      ) {
        removeEvent(event.matchCode)
      } else {
        setSelectedEvents([...firstPart, selectedEvent, ...secondPart])
      }
    } else {
      setSelectedEvents([...selectedEvents, selectedEvent])
    }
  }

  const isSelected = (
    event: Event,
    outcomeGroupId: string,
    outcomeId: string
  ): boolean => {
    return selectedEvents.some(
      (f) =>
        f.code === event.matchCode &&
        f.selectedOutcomeGroupId === outcomeGroupId &&
        f.selectedOutcomeId === outcomeId
    )
  }

  return (
    <CouponContext.Provider
      value={{
        cumulativeRate,
        selectedEvents,
        setSelectedEvents,
        isSelected,
        toggleEvent,
        removeEvent,
      }}
    >
      {children}
    </CouponContext.Provider>
  )
}

export { CouponProvider }
