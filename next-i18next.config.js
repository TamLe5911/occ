const path = require('path');
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es', 'pl', 'fr_FR', 'vn'],
    },
    localePath: path.resolve('./public/locales'),

    react: {
        useSuspense: false,
        wait: true,
    }
};