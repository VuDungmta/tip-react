import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";

import translationEN from './translations/locales/en/translation.js';
import translationVN from './translations/locales/vn/translation.js';

//the translations
const resources = {
  en: {
    translation: translationEN
  },
  vn: {
    translation: translationVN
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
      resources,
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next"
    //     }
        
    //   },
    //   vn: {
    //     translation: {
    //       "Welcome to React": "xin chao"
    //     }
        
    //   }
    // },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;