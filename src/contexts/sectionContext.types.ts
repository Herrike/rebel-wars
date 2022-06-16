import { GenericResponseData } from "../utils/typeguards.types";

export type SectionType = 'planets'|'vehicles'|'species'|'starships'|''
export type LangType = 'wookiee' | ''
export type SectionContextType = {
  activeSection: SectionType;
  contentSection: GenericResponseData | null,
  setActiveSection: (activeSection: SectionType) => void;
  setContentSection: (contentSection: GenericResponseData | null) => void;
};