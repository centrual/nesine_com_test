import { memo, useContext } from 'react'
import { CouponSelectionContext } from '@providers/couponSelectionProvider/couponSelectionProvider'
import classNames from 'classnames'

import Styles from './couponHeader.module.scss'

const CouponHeader = memo(() => {
  const { cumulativeRate, isOpened, selectedEvents, setIsOpened } = useContext(
    CouponSelectionContext
  )

  const _onCouponHeaderClicked = () => {
    setIsOpened?.(!isOpened)
  }

  return (
    <div
      className={classNames(Styles.couponHeader, { [Styles.opened]: isOpened })}
      onClick={_onCouponHeaderClicked}
    >
      <div className={Styles.selectedEventCount}>
        {selectedEvents?.length ?? 0} adet seçtiniz
      </div>

      <div className={Styles.rate}>x {cumulativeRate}</div>

      <div className={Styles.openClose}>{isOpened ? 'kapat' : 'aç'}</div>
    </div>
  )
})

CouponHeader.displayName = 'CouponHeader'

export { CouponHeader }
