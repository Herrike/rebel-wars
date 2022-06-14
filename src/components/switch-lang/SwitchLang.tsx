import React, { FC, FormEvent, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { getParams, prepareQuery, wookieeLang } from '../../utils/query'
import { isValidLang } from '../../utils/typeguards'

const SwitchLang: FC = () => {
  const { activeSection, activeLang, querySection, setQuerySection, setActiveLang } =
    useContext(SectionContext)
  const changeLangHandler = (event: FormEvent<HTMLSelectElement>): void => {
    const selectedLang = event.currentTarget.value

    if (isValidLang(selectedLang) && selectedLang !== activeLang) {
      setActiveLang(selectedLang)
      const params = getParams(querySection)
      if (!('format' in params) && activeLang === wookieeLang) {
        params['format'] = wookieeLang
      } else if (selectedLang === '') {
        delete params.format
      }
      const query = prepareQuery(activeSection, params)
      setQuerySection(query)
    }
  }

  return (
    <form action='#'>
      <select
        name='lang'
        id='switch-lang'
        value={activeLang}
        disabled
        onChange={changeLangHandler}
        title='wookiee language support coming soon'
      >
        <option value=''>English</option>
        <option value={wookieeLang}>{wookieeLang}</option>
      </select>
    </form>
  )
}

export default SwitchLang
