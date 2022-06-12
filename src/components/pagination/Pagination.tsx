import React, { FC, MouseEvent, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { arrayFromNumber } from '../../utils/array'
import { getParamValue, paramsToString, prepareQuery, QueryParam } from '../../utils/query'

const Pagination:FC = () => {
    const { activeSection, querySection, contentSection, activeLang, setQuerySection } = useContext(SectionContext)

    // number of pages based on 10 max items per page
    const pages = contentSection && contentSection.count > 10 ? Math.ceil(contentSection.count/10) : 1

    const changePageHandler = (event:MouseEvent<HTMLButtonElement>): void => {
        const page = parseInt(event.currentTarget.title.split('-')[1])
        const querySectionPage = parseInt(getParamValue(querySection, 'page'))
        let params:QueryParam[] = []

        if(Number.isInteger(page) && page !== 1 && Number.isInteger(querySectionPage) && querySectionPage !== page){
            // hyandle page params
            params = []
        }
        const query = prepareQuery(activeSection, activeLang, params)
        setQuerySection(query)
  }

  console.log(paramsToString([{search: 'pony'}], ''))
  return (
     <ul>
        {arrayFromNumber(pages).map((page, i)=> {
        const pageName = i+1
        return (<li key={`page-${pageName}`}><button onClick={changePageHandler} title={`page-${pageName}`} data-testid={`page-${pageName}`}>{pageName}</button></li>)
    })
    }
     </ul>
  )
}

export default Pagination