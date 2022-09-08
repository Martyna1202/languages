import { useState, createContext } from "react";
import { languages, showMessage } from "../languageData";


export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) =>{

    const [language, setLanguage] = useState('en')
  
    const exportData = { language, setLanguage, languages, showMessage }

    return (
        <LanguageContext.Provider value={exportData}>
            {children}
        </LanguageContext.Provider>
    )
}
