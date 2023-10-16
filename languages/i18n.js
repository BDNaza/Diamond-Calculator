import i18next from 'i18next';
import { useState } from 'react';
import malay from './malay.json';
import english from './english.json';
import chinese from './chinese.json';
import japan from './japan.json';

import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialLanguage = 'en'

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true,
    detect: async callback => {
        const storeLanguage = await AsyncStorage.getItem("savedLang")
        const selectedLanguage = storeLanguage || initialLanguage
        callback(selectedLanguage)
    },
    cacheUserLanguage: () => { }
}

i18next.use(initReactI18next).use(languageDetector).init({
    compatibilityJSON: 'v3',
    // lng: 'en',
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
