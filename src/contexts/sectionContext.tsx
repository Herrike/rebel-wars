/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react'
import { SectionContextType } from './sectionContext.types'

export const SectionContext = createContext<SectionContextType>({
  apiDomain: '',
  activeSection: 'planets',
  contentSection: null,
  setActiveSection: (activeSection) => {},
  setContentSection: (contentSection) => {},
  setApiDomain: (apiDomain) => {}
})
