/*
Events > ID > C (“Code”) / D (“Date”) / DAY (“Day”) / LN (“League Name”) / N (“Team Name”)

> OCG ("Outcome Group") >
  2 ("Game Type Örn: Çifte Şans") >
    OC ("Outcome") >
      3 ("1-X") >
        O ("Seçtirilecek oran")

Temelde bunlar kullanılacak ve oyun tiplerinin oranları seçilecek videodaki gibi. Datadaki oyun tipleri 3 tane olması lazım. OCG içerisinde 2 (Çifte Şans: 1-X / 1-2 / X-2), 5 (2,5 Gol: Alt / Üst) ve 1 (Maç Sonucu: 1 / X / 2)
 */

import { EventListRowProps } from '@molecules/eventListRow/eventListRow.types'

interface EventListProps {
  fixture: EventListRowProps[]
  loadNextPage: () => void
  isNextPageLoading: boolean
  hasNextPage: boolean
}

export type { EventListProps }
