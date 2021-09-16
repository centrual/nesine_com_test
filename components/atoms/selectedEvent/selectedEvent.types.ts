import { SelectedEvent } from '@providers/couponSelectionProvider/couponSelectionProvider.types'

interface SelectedEventProps {
  selectedEvent: SelectedEvent
  onDeleteButtonClicked?: (event: SelectedEvent) => void
}

export type { SelectedEventProps }
