import { memo } from 'react'
import type { DayNameHeaderProps } from './dayNameHeader.types'
import Styles from './dayNameHeader.module.scss'

const DayNameHeader = memo<DayNameHeaderProps>((props) => {
  const { dayName, date } = props

  return (
    <div className={Styles.dayNameHeader}>
      {date} - {dayName}
    </div>
  )
})

DayNameHeader.displayName = 'DayNameHeader'

export { DayNameHeader }
