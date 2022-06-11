import { GenericResponseData } from "../utils/typeguards.types";

export type SectionType = 'planets'|'vehicles'|'species'
  export type SectionContextType = {
    activeSection: SectionType;
    contentSection: GenericResponseData | null,
    querySection: string,
    setActiveSection: (activeSection: SectionType) => void;
    setContentSection: (contentSection: GenericResponseData | null) => void;
    setQuerySection: (querySection: string) => void;
  };