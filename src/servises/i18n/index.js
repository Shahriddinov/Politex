import i18n from "i18next";
import HttpApi from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import uz from "../../Ing/uz.json"
import ru from "../../Ing/ru.json"
import en from "../../Ing/en.json"
// eslint-disable-next-line import/prefer-default-export


const availableLanguages = ["uz", "ru", "en"];
export const init = ({ languages, currentLanguage, initialLanguage, backend, debug, onChange }) => {
  i18n.on("languageChanged", language => onChange(language));

  const checkedCurrentLanguage = languages.find(l => l === currentLanguage) || initialLanguage;

  i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      lowerCaseLng: true,
      lng: checkedCurrentLanguage,
      fallbackLng: checkedCurrentLanguage,
      debug,
      supportedLngs: languages,
      whitelist: languages,
      interpolation: {
        escapeValue: false
      },
      ns: ["common"],
      defaultNS: "common",
      backend: {
        loadPath: backend?.loadPath,
        crossDomain: true,
        allowMultiLoading: true
      },
      react: {
        useSuspense: true,
        wait: true
      }
    });
};
