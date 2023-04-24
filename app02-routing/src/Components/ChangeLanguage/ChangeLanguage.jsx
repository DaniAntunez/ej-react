import { useContext } from "react"
import { LanguageContext } from "../../App" 

export default function ChangeLanguage() {
    const lenguage = useContext(LanguageContext)
    
    return <div>El lenguaje actual es: {lenguage}</div>
}
