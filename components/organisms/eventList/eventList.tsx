import React, { memo } from 'react'
import { AutoSizer, Index, InfiniteLoader, List } from 'react-virtualized'
import type { EventListProps } from '@organisms/eventList/eventsList.types'
import Styles from './eventList.module.scss'
import { EventListRow } from '@molecules/eventListRow/eventListRow'
import { ListRowProps } from 'react-virtualized/dist/es/List'

const EventList = memo<EventListProps>((props) => {
  const { fixture, hasNextPage, loadNextPage, isNextPageLoading } = props

  const rowCount = hasNextPage ? fixture.length + 1 : fixture.length

  const loadMoreRows = async () => {
    if (isNextPageLoading) {
      return
    }

    await loadNextPage()
  }

  const isRowLoaded = (params: Index): boolean => {
    const { index } = params
    return !hasNextPage || index < fixture.length
  }

  const rowRenderer = (rowProps: ListRowProps) => {
    const { style, key, index } = rowProps

    if (!isRowLoaded({ index })) {
      return <div className={Styles.eventList}>Yükleniyor...</div>
    }

    const targetRow = fixture[index]

    return <EventListRow {...targetRow} key={key} style={style} />
  }

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <div style={{ width: '100vw', height: '100vh' }}>
          <AutoSizer defaultWidth={1200} defaultHeight={400}>
            {({ height, width }) => {
              if (!width || !height) {
                return (
                  <div>
                    Unable to determine dimensions width={width} height={height}
                  </div>
                )
              }

              return (
                <List
                  className={Styles.eventList}
                  width={width}
                  height={height}
                  rowHeight={40}
                  rowCount={fixture.length ?? 30}
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  rowRenderer={rowRenderer}
                />
              )
            }}
          </AutoSizer>
        </div>
      )}
    </InfiniteLoader>
  )
})

EventList.displayName = 'EventList'

export { EventList }
