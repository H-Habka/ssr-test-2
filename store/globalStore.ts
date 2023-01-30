import { create } from "zustand"
import { globalState } from "../constants"

export const useGlobalStore = create<globalState>((set) => ({
  darkMode: true,
  lang: "en",
  leftBarStatus: false,
  rightBarStatus: false,
  setDarkMode: (darkMode) => set((state) => ({ ...state, darkMode })),
  setLang: (lang) => set((state) => ({ ...state, lang })),
  setLeftBarStatus: (status) => set((state) => ({ ...state, leftBarStatus: status })),
  setRightBarStatus: (status) => set((state) => ({ ...state, rightBarStatus: status }))
}))
