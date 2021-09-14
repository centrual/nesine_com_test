import { Event, FixtureDay } from '@components/eventsGrid/eventsGrid.types'

const sortEventsByTimeAsc = (currentEvent: Event, nextEvent: Event): number =>
  currentEvent.unixTimestamp - nextEvent.unixTimestamp

const groupEvents = (
  grouped: FixtureDay[],
  currentValue: Event
): FixtureDay[] => {
  const foundFixtureDayIndex = grouped.findIndex(
    (f) => f.date === currentValue.date
  )

  if (foundFixtureDayIndex) {
    grouped[foundFixtureDayIndex].events.push(currentValue)
    grouped[foundFixtureDayIndex].events.sort(sortEventsByTimeAsc)
  } else {
    grouped.push({
      dayName: currentValue.day,
      date: currentValue.date,
      events: [currentValue],
    })
  }

  return grouped
}

export { groupEvents }
