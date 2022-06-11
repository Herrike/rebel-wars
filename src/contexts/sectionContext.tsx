import { createContext } from "react";
import { SectionContextType } from "./sectionContext.types";

export const SectionContext = createContext<SectionContextType>({
    activeSection: 'planets',
    querySection: 'api/planets',
    contentSection: null,
    setActiveSection: (activeSection) => {},
    setQuerySection:(querySection) => {},
    setContentSection: (contentSection) => {},
});