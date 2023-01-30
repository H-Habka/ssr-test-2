import arLoginAndRegisterTrans from "./locales/ar/loginAndRegister.json";
import enLoginAndRegisterTrans from "./locales/en/loginAndRegister.json";
import arMainLayoutTrans from "./locales/ar/mainLayout.json";
import enMainLayoutTrans from "./locales/en/mainLayout.json";
import arSettingslayout from "./locales/ar/settingslayout.json";
import enSettingslayout from "./locales/en/settingslayout.json";

export const resources = {
  ar: {
    translation: {
      ...arLoginAndRegisterTrans,
      ...arMainLayoutTrans,
      ...arSettingslayout,
    },
  },
  en: {
    translation: {
      ...enLoginAndRegisterTrans,
      ...enMainLayoutTrans,
      ...enSettingslayout,
    },
  },
};
