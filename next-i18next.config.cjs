process.env.I18NEXT_DEFAULT_CONFIG_PATH = __filename

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es']
    },
    localePath: typeof window === 'undefined'
        ? require('path').resolve('./public/static/locales')
        : './public/static/locales',
}