import i18next from 'i18next';

import malay from './malay.json';
import english from './english.json';
import chinese from './chinese.json';
import japan from './japan.json';

import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
    lng: 'en',
    resources: {
        my: malay,
        en: english,
        ch: chinese,
        jp: japan,
    },
    react: {
        useSuspense: false
    },
});
export default i18next;
