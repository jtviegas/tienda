import React, {useMemo} from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import { Spinner } from '../../components/Spinner'

import { ItemExcerpt } from '../../components/Item'


import { useGetItemsQuery } from '../api/apiSlice'

/*
let ItemExcerpt = ({ item }) => {

  return (
    <article className="item-excerpt" key={item.id}>
      <h3>{item.name}</h3>
      <div>

        <TimeAgo creation={new Date(item.creation)} />
      </div>
      
    </article>
  )
}
*/

export const ItemList = () => {
  const {
    data: items = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetItemsQuery()

  const sortedItems = useMemo(() => {
    const sortedItems = items.slice()
    // Sort posts in descending chronological order
    sortedItems.sort((a, b) => a.creation < b.creation ? -1 : (b.creation < a.creation ? 1 : 0) )
    return sortedItems
  }, [items])

  let content

  if (isLoading) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    const renderedItems = sortedItems.map(item => (
      <ItemExcerpt key={item.id} item={item} />
    ))

    const containerClassname = classnames('items-container', {
      disabled: isFetching
    })

    content = <div className={containerClassname}>{renderedItems}</div>
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className="items-list">
      <h2>Items</h2>
      <button onClick={refetch}>Refetch Items</button>
      {content}
    </section>
  )
}