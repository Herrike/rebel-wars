import React, { FC } from 'react'
import { wookieeLang } from '../../utils/query'

const SwitchLang: FC = () => {
  return (
    <form action='#'>
      <select
        name='lang'
        id='switch-lang'
        value={''}
        disabled
        title='wookiee language support coming soon'
      >
        <option value=''>English</option>
        <option value={wookieeLang}>{wookieeLang}</option>
      </select>
    </form>
  )
}

export default SwitchLang
