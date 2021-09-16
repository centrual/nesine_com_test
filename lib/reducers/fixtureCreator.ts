import { Event } from '@atoms/event/event.types'
import {
  EventListRowProps,
  RowType,
} from '@molecules/eventListRow/eventListRow.types'

const createFixture = (
  allItems: EventListRowProps[],
  currentItem: Event
): EventListRowProps[] => {
  let foundDayIndex = -1

  for (let index = allItems.length - 1; index >= 0; index--) {
    const target = allItems[index]

    if (
      target.rowType === RowType.FIXTURE_DAY &&
      target.date === currentItem.date
    ) {
      foundDayIndex = index
      break
    }
  }

  if (foundDayIndex === -1) {
    allItems.push({
      rowType: RowType.FIXTURE_DAY,
      date: currentItem.date,
      dayName: currentItem.day,
    })
    foundDayIndex = allItems.length - 1
  }

  let foundLeagueIndex = -1

  for (let index = allItems.length - 1; index > foundDayIndex; index--) {
    const target = allItems[index]

    if (
      target.rowType === RowType.LEAGUE_NAME &&
      target.leagueName === currentItem.leagueName
    ) {
      foundLeagueIndex = index
      break
    }
  }

  if (foundLeagueIndex === -1) {
    allItems.push({
      rowType: RowType.LEAGUE_NAME,
      leagueName: currentItem.leagueName,
    })
    foundLeagueIndex = allItems.length - 1
  }

  let lastEventIndexInLeagueAtDate = -1

  for (let index = foundLeagueIndex; index < allItems.length - 1; index++) {
    const target = allItems[index]

    if (index + 1 === allItems.length && target.rowType === RowType.EVENT) {
      break
    }

    if (target.rowType === RowType.EVENT) {
      lastEventIndexInLeagueAtDate = index
    } else {
      break
    }
  }

  if (lastEventIndexInLeagueAtDate === -1) {
    allItems.push({ rowType: RowType.EVENT, event: currentItem })
  } else {
    const firstPart = allItems.slice(0, lastEventIndexInLeagueAtDate)
    const lastPart = allItems.slice(
      lastEventIndexInLeagueAtDate + 1,
      allItems.length - 1
    )
    allItems = [
      ...firstPart,
      { rowType: RowType.EVENT, event: currentItem },
      ...lastPart,
    ]
  }

  return allItems
}

export { createFixture }
