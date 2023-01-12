export interface globalState {
    darkMode : boolean
    lang : string
    setDarkMode : (darkMode : boolean) => void
    setLang : (lang : string) => void
}