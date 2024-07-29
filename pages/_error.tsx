// import { css } from '@pigment-css/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations.js'

import { useTranslation} from 'next-i18next'

const ErrorPage = () => {
    const { t } = useTranslation('common')

    return <div>{t('App.Error')}</div>
}

export default ErrorPage

// const styles = css({
//     color: 'red'
// })

export const getServerSideProps = async (ctx) => {
    const localeProps = await serverSideTranslations(ctx.locale, ['common'])

    return {
        props: {
            ...localeProps,
        }
    }
}