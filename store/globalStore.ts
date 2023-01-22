import { create } from "zustand";
import { globalState } from "../constants";

export const useGlobalStore = create<globalState>((set) => ({
  darkMode: false,
  lang: "en",
  errorMsg: "",
  leftBarStatus: false,
  setLeftBarStatus: (status) =>
    set((state) => ({ ...state, leftBarStatus: status })),
  rightBarStatus: false,
  setRightBarStatus: (status) =>
    set((state) => ({ ...state, rightBarStatus: status })),
  setError: (errorMsg) => set((state) => ({ ...state, errorMsg })),
  setLang: (lang) =>
    set((state) => ({
      ...state,
      lang,
    })),
  setDarkMode: (darkMode) =>
    set((state) => ({
      ...state,
      darkMode,
    })),
}));
