import React, { FC, MouseEvent } from 'react'
import { arrayFromNumber } from '../../utils/array'

const Pagination: FC<{ items: number; setPage: (page: string) => void }> = ({ items, setPage }) => {
  // number of pages based on 10 max items per page
  const pages = Math.ceil(items / 10)

  const changePageHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const selectedPage = parseInt(event.currentTarget.getAttribute('data-page') || '') // NaN if page = ''

    if (Number.isInteger(selectedPage)) {
      setPage(`${selectedPage}`)
    }
  }
  return (
    <ul className='pagination'>
      {arrayFromNumber(pages).map((_, i) => {
        const pageKey = i + 1
        const pageName = `page-${pageKey}`
        return (
          <li key={pageName}>
            <button onClick={changePageHandler} data-page={pageKey} data-testid={pageName}>
              {pageKey}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagination
