import { memo } from 'react'
import type { LeagueNameHeaderProps } from './leagueNameHeader.types'
import Styles from './leagueNameHeader.module.scss'

const LeagueNameHeader = memo<LeagueNameHeaderProps>((props) => {
  const { leagueName } = props

  return <div className={Styles.leagueNameHeader}>{leagueName}</div>
})

LeagueNameHeader.displayName = 'DayNameHeader'

export { LeagueNameHeader }
