import React, { FC, MouseEvent, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { arrayFromNumber } from '../../utils/array'

const Pagination:FC = () => {
    const { activeSection, querySection, contentSection, setQuerySection } = useContext(SectionContext)

    // number of pages based on 10 max items per page
    const pages = contentSection && contentSection.count > 10 ? Math.ceil(contentSection.count/10) : 1

    const changePageHandler = (event:MouseEvent<HTMLButtonElement>): void => {
        const page = event.currentTarget.title.split('-')[1]
        if(page === '1'){
            setQuerySection(`api/${activeSection}`)
        }
        else if(page !== '1' && querySection.split('?page=')[1] !== page){
        setQuerySection(`api/${activeSection}/?page=${page}`)
        }
  }
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