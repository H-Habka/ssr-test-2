import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
import { resources } from "./resources";


const i18nInit = i18next.createInstance();
i18nInit
  .use(initReactI18next)
  .use(languagedetector)
  .init({
    resources,
    debug: process.env.NODE_ENV === "development",
    // interpolation: {
    //   escapeValue: false, // react already safes from xss
    // },
    fallbackLng: (code) => {
      // if (code && (code === 'ar' || code.startsWith('ar'))) return 'ar';
      return "en";
    },
  });

export default i18nInit;
