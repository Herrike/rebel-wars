import React, { FC, MouseEvent, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { arrayFromNumber } from '../../utils/array'
import { getParams, prepareQuery, QueryParams } from '../../utils/query'

const Pagination:FC = () => {
    const { activeSection, querySection, contentSection, setQuerySection } = useContext(SectionContext)

    // number of pages based on 10 max items per page
    const pages = contentSection && contentSection.count > 10 ? Math.ceil(contentSection.count/10) : 1

    const changePageHandler = (event:MouseEvent<HTMLButtonElement>): void => {
        const page = event.currentTarget.getAttribute('data-page') || ''
        const selectedPage = parseInt(page) // NaN if page = ''
        let params: QueryParams = getParams(querySection)
        const querySectionPage = parseInt(params.page)

        if(Number.isInteger(selectedPage) && selectedPage > 1 && selectedPage !== querySectionPage){
            params.page = `${selectedPage}`
        }
        else if(Number.isInteger(selectedPage) && selectedPage === 1 && selectedPage !== querySectionPage){
            delete params.page
        }
        const query = prepareQuery(activeSection, params)
        setQuerySection(query)
  }
  return (
     <ul className='pagination'>
        {arrayFromNumber(pages).map((_, i)=> {
        const pageKey = i+1
        const pageName = `page-${pageKey}`
        return (<li key={pageName}><button onClick={changePageHandler} data-page={pageKey} data-testid={pageName}>{pageKey}</button></li>)
    })
    }
     </ul>
  )
}

export default Pagination