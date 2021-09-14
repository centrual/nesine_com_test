import React, { createContext, useEffect, useState } from 'react'
import {
  CouponProviderProps,
  SelectedEvent,
} from '@providers/couponProvider.types'
import type { Event } from '@components/eventsGrid/eventsGrid.types'
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

  const addEvent = (
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
      const firstPart = selectedEvents.slice(0, existingEventIndex - 1)
      const secondPart = selectedEvents.slice(
        existingEventIndex + 1,
        selectedEvents.length - 1
      )
      setSelectedEvents([...firstPart, selectedEvent, ...secondPart])
    } else {
      setSelectedEvents([...selectedEvents, selectedEvent])
    }
  }

  return (
    <CouponContext.Provider
      value={{
        cumulativeRate,
        selectedEvents,
        setSelectedEvents,
        addEvent,
        removeEvent,
      }}
    >
      {children}
    </CouponContext.Provider>
  )
}

export { CouponProvider }
