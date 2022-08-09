import config from "./config";
import { i18n, storage, http } from "./servises";

i18n.init({
  languages: config.language.list,
  currentLanguage: storage.local.get(config.language.key),
  initialLanguage: config.language.initial,
  backend: {
    loadPath: `${config.api.base_url}/api/uniquelinks?lang={{lng}}`
  },
  onChange: language => storage.local.set("language", language)
});
// https://mustafo.na4u.ru/api/uniquelinks?lang=ru
http.init({
  configFn: () => {
    return {
      baseURL: config.api.base_url
    };
  }
});
