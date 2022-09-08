import { useContext } from "react"
import { LanguageContext } from "../UseContext/LanguageContext"

function WelcomeMessage() {

    const {language, showMessage} = useContext(LanguageContext);

    return (
        <div>
            <h1>{showMessage[language]}</h1>
        </div>
    )
}

export default WelcomeMessage