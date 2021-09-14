import type {
  DBEventOutcome,
  DBEventOutcomeGroup,
  DBEventsProjection,
} from '@api/getMatches.types'
import type {
  Event,
  Outcome,
  OutcomeGroup,
} from '@components/eventsGrid/eventsGrid.types'
import { SelectedEvent } from '@providers/couponProvider.types'

const outcomeMap = (outcome: DBEventOutcome): Outcome => {
  return {
    optionId: outcome.ID,
    optionName: outcome.N,
    rate: outcome.O,
  }
}

const outcomeGroupMap = (outcomeGroup: DBEventOutcomeGroup): OutcomeGroup => {
  return {
    groupId: outcomeGroup.ID,
    name: outcomeGroup.N,
    outcomes: outcomeGroup.OC.filter((f) => f != null).map(outcomeMap),
  }
}

const mapDbEventToEvent = (event: DBEventsProjection): Event => {
  return {
    unixTimestamp: event.ESD,
    date: event.D,
    day: event.DAY,
    leagueName: event.LN,
    matchId: event._id,
    matchCode: event.C,
    time: event.T,
    competitors: event.N,
    outcomeGroups: event.OCG.filter((f) => f != null).map(outcomeGroupMap),
  }
}

const mapEventToSelectedEvent = (
  event: Event,
  outcomeGroupId: string,
  outcomeId: string
): SelectedEvent => {
  const foundOutcomeGroup = event.outcomeGroups.find(
    (f) => f?.groupId === outcomeGroupId
  )

  if (foundOutcomeGroup == null) {
    throw new Error('Outcome group not found!')
  }

  const foundOutcome = foundOutcomeGroup.outcomes.find(
    (f) => f?.optionId === outcomeId
  )

  if (foundOutcome == null) {
    throw new Error('Outcome not found!')
  }

  const { optionId, optionName, rate } = foundOutcome

  return {
    code: event.matchCode,
    selectedOutcomeId: optionId,
    selectedOutcomeName: optionName,
    selectedOutcomeRate: rate,
    selectedOutcomeGroupId: foundOutcomeGroup.groupId,
  }
}

export { mapDbEventToEvent, mapEventToSelectedEvent }
