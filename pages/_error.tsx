import { css } from '@pigment-css/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations.js'

// import Image from 'next/image'

import { useTranslation} from 'next-i18next'

const ErrorPage = () => {
    const { t } = useTranslation('common')

    return <>
    {/*<Image src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               width={200}
               height={200}
        />*/}
        <div className={styles}>{t('App.Error')}</div>
    </>
}

export default ErrorPage

const styles = css({
    color: 'red'
})

export const getServerSideProps = async (ctx) => {
    const localeProps = await serverSideTranslations(ctx.locale, ['common'])

    return {
        props: {
            ...localeProps,
        }
    }
}