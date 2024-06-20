import * as NRLocalize from 'react-native-localize';
import I18n from 'i18n-js';
import en from '../locales/en';
import pt from '../locales/pt';
import es from '../locales/es';

const locales = NRLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageCode;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  pt,
  es,
};

export default I18n;
