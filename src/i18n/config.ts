import en from './translations/en.json';
import es from './translations/es.json';

export const defaultLocale = 'en';

export const locales = {
  en,
  es,
};

export const getLocale = (locale: string | undefined) => {
  if (locale && locales[locale as keyof typeof locales]) {
    return locale as keyof typeof locales;
  }
  return defaultLocale;
};

export const getTranslation = (key: string, locale: string) => {
  const currentLocale = getLocale(locale);
  const translation = locales[currentLocale][key];
  if (!translation) {
    console.warn(`Translation for key "${key}" not found in locale "${currentLocale}"`);
    return key;
  }
  return translation;
};
