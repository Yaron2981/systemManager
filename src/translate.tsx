import { createIntl, createIntlCache } from "react-intl";
import { default as en } from "./translations/en.json";
import { default as he } from "./translations/he.json";


export const messages:any = {
  en: en,
  he:he
};

const cache = createIntlCache();

let int = createIntl(
  {
    locale: "en",
    messages: messages["en"]
  },
  cache
);

export function changeLanguage(lang: string) {
  const newIntl = createIntl(
    {
      locale: lang,
      messages: messages[lang]
    },
    cache
  );
  int = newIntl;
}

const translate = (id: string, values?: {}) => {
  return int.formatMessage({ id }, values);
};

export default translate;
