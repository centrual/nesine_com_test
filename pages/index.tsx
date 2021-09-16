import React, { useCallback, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { GetMatchesResponseData } from '@api/getEvents.types'
import { flushSync } from 'react-dom'
import { EventListRowProps } from '@molecules/eventListRow/eventListRow.types'
import { createFixture } from '../lib/reducers/fixtureCreator'
import { EventList } from '@organisms/eventList/eventList'
import { Coupon } from '@organisms/coupon/coupon'

const Index: NextPage = () => {
  const [isEventsLoading, setIsEventsLoading] = useState(true)
  const [rows, setRows] = useState<EventListRowProps[]>([])
  const [lastEventCode, setLastEventCode] = useState<number | null>(null)
  const [isMoreAvailable, setIsMoreAvailable] = useState(false)

  const loadEvents = useCallback(async () => {
    let reactVersion = 0

    const splittedReactVersion = React.version.split('.')

    if (splittedReactVersion.length > 0) {
      reactVersion = parseInt(splittedReactVersion[0])
    }

    if (reactVersion >= 18) {
      flushSync(() => {
        setIsEventsLoading(true)
      })
    } else {
      setIsEventsLoading(true)
    }

    try {
      let lastEventCodeQuery = ''

      if (lastEventCode != null && lastEventCode > 0) {
        lastEventCodeQuery = `?lastEventCode=${lastEventCode}`
      }

      const getEventsReq = await axios.get<GetMatchesResponseData>(
        '/api/getEvents' + lastEventCodeQuery
      )

      const {
        moreEventsAvailable,
        events,
        lastEventCode: lastEventCodeResult,
      } = getEventsReq.data

      if (events) {
        setRows(events.reduce(createFixture, [...rows]))
      }
      setLastEventCode(lastEventCodeResult)
      setIsMoreAvailable(moreEventsAvailable)
    } finally {
      setIsEventsLoading(false)
    }
  }, [lastEventCode, rows])

  useEffect(() => {
    loadEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Merhaba Nesine.com</title>
        <meta name="description" content="Nesine.com test" />
      </Head>

      <EventList
        fixture={rows}
        hasNextPage={isMoreAvailable}
        isNextPageLoading={isEventsLoading}
        loadNextPage={loadEvents}
      />

      <Coupon />
    </>
  )
}

export default Index
