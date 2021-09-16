import { memo, useContext } from 'react'
import { CouponEventList } from '@molecules/couponEventList/couponEventList'
import { CouponHeader } from '@atoms/couponHeader/couponHeader'
import { CouponSelectionContext } from '@providers/couponSelectionProvider/couponSelectionProvider'

import Styles from './coupon.module.scss'
import classNames from 'classnames'

const Coupon = memo(() => {
  const { isOpened } = useContext(CouponSelectionContext)

  return (
    <div className={classNames(Styles.coupon, { [Styles.opened]: isOpened })}>
      <CouponHeader />
      <CouponEventList />
    </div>
  )
})

Coupon.displayName = 'Coupon'

export { Coupon }
