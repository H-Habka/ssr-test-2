import { create } from "zustand";
import { globalState } from "../constants";

export const useGlobalStore = create<globalState>((set) => ({
  darkMode: true,
  lang: "en",
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
