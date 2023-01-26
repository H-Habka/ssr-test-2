import arLoginAndRegisterTrans from "./locales/ar/loginAndRegister.json";
import enLoginAndRegisterTrans from "./locales/en/loginAndRegister.json";
import arMainLayoutTrans from "./locales/ar/mainLayout.json";
import enMainLayoutTrans from "./locales/en/mainLayout.json";

export const resources = {
  ar: {
    translation: { ...arLoginAndRegisterTrans, ...arMainLayoutTrans },
  },
  en: {
    translation: { ...enLoginAndRegisterTrans, ...enMainLayoutTrans },
  },
};
