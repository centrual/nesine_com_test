import React, { memo, useContext } from 'react'
import { CouponSelectionContext } from '@providers/couponSelectionProvider/couponSelectionProvider'
import Styles from './couponEventList.module.scss'
import { SelectedEvent } from '@atoms/selectedEvent/selectedEvent'
import { SelectedEvent as SelectedEventProps } from '@providers/couponSelectionProvider/couponSelectionProvider.types'
import { Animated } from 'react-animated-css'

const CouponEventList = memo(() => {
  const { selectedEvents, isOpened, removeEvent } = useContext(
    CouponSelectionContext
  )

  if (!isOpened) {
    return null
  }

  const _onDeleteButtonClicked = (event: SelectedEventProps) => {
    removeEvent?.(event.code)
  }

  return (
    <div className={Styles.couponEventList}>
      {selectedEvents?.map((event) => (
        <Animated
          animationIn={'zoomIn'}
          animationOut={'zoomOut'}
          isVisible={true}
          key={`${event.code}selected`}
        >
          <SelectedEvent
            selectedEvent={event}
            onDeleteButtonClicked={_onDeleteButtonClicked}
          />
        </Animated>
      ))}
    </div>
  )
})

CouponEventList.displayName = 'CouponEventList'

export { CouponEventList }
