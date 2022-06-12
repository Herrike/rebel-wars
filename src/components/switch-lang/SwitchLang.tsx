import React, { FC, FormEvent, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { prepareQuery, wookieeLang } from '../../utils/query'
import { isValidLang } from '../../utils/typeguards'



const SwitchLang:FC = () => {
    const { activeSection, activeLang, setQuerySection, setActiveLang } = useContext(SectionContext)
    const changeLangHandler = (event:FormEvent<HTMLSelectElement>): void => {
        const selectedLang = event.currentTarget.value

        if(isValidLang(selectedLang) && selectedLang !== activeLang){
            setActiveLang(selectedLang)
            const query = prepareQuery(activeSection, selectedLang)
            setQuerySection(query)
        }
      }

    return (
        <form action="#">
            <select name="lang" id="switch-lang" defaultValue={activeLang} onChange={changeLangHandler} disabled title='wookiee language support coming soon'>
                <option value="">default</option>
                <option value={wookieeLang}>{wookieeLang}</option>
            </select>
        </form>
     
    )
}

export default SwitchLang