import React, { createContext, useEffect, useState } from 'react'
import {
  CouponSelectionProviderProps,
  SelectedEvent,
} from '@providers/couponSelectionProvider/couponSelectionProvider.types'
import type { Event } from '@atoms/event/event.types'
import BigNumber from 'bignumber.js'
import { mapEventToSelectedEvent } from '../../lib/mappers/eventMapper'

export const CouponSelectionContext = createContext<
  Partial<CouponSelectionProviderProps>
>({})

const CouponSelectionProvider = ({
  children,
}: Partial<CouponSelectionProviderProps>): JSX.Element => {
  const [cumulativeRate, setCumulativeRate] = useState<string>('0')
  const [selectedEvents, setSelectedEvents] = useState<SelectedEvent[]>([])
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    let calculatedCumulativeRate = new BigNumber(0)

    selectedEvents.forEach((event: SelectedEvent) => {
      if (calculatedCumulativeRate.eq(0)) {
        calculatedCumulativeRate = calculatedCumulativeRate.plus(
          event.outcomeRate
        )
      } else {
        calculatedCumulativeRate = calculatedCumulativeRate.multipliedBy(
          event.outcomeRate
        )
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
        existingEvent.outcomeGroupId === outcomeGroupId &&
        existingEvent.outcomeId === outcomeId
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
        f.outcomeGroupId === outcomeGroupId &&
        f.outcomeId === outcomeId
    )
  }

  return (
    <CouponSelectionContext.Provider
      value={{
        cumulativeRate,
        selectedEvents,
        setSelectedEvents,
        isSelected,
        toggleEvent,
        removeEvent,
        isOpened,
        setIsOpened,
      }}
    >
      {children}
    </CouponSelectionContext.Provider>
  )
}

export { CouponSelectionProvider }
