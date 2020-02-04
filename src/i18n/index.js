import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './locales';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    messages,
    silentTranslationWarn: true, // disable warning when using fallback locale
});
