import { useState, useEffect } from 'react';
import { getTranslation, getLocale, defaultLocale } from '../../i18n/config';

export function useTranslation(initialLocale?: string) {
  const [locale, setLocale] = useState(getLocale(initialLocale));

  useEffect(() => {
    setLocale(getLocale(initialLocale));
  }, [initialLocale]);

  const t = (key: string) => {
    return getTranslation(key, locale);
  };

  const changeLocale = (newLocale: string) => {
    setLocale(getLocale(newLocale));
  };

  return { t, locale, changeLocale };
}
