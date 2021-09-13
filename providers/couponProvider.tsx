import React, { createContext, ReactNode } from 'react'
import { CouponProviderProps } from '@providers/couponProvider.types'

export const CouponContext = createContext<Partial<CouponProviderProps>>({})

const CouponProvider = ({ children }: CouponProviderProps): ReactNode => {
  return <CouponContext.Provider value={{ children }} />
}

export { CouponProvider }
export default CouponProvider
