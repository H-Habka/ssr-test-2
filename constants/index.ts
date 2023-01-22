export interface globalState {
    darkMode : boolean
    lang : string
    setDarkMode : (darkMode : boolean) => void
    setLang : (lang : string) => void
    errorMsg : string
    setError : (error : string) => void
    leftBarStatus : boolean
    setLeftBarStatus : (status: boolean) => void
    rightBarStatus : boolean
    setRightBarStatus : (status: boolean) => void
}