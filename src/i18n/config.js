import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./translations/en-US.json";

const resources = {
  en: {
    translation: enUS,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
