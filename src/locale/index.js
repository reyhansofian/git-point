import I18n from 'react-native-i18n';
import { en, nl } from './languages';

I18n.fallbacks = true;

I18n.translations = {
  en,
  nl,
};

export default I18n;
