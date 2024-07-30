import { withPigment } from "@pigment-css/nextjs-plugin"

const { i18n } = await import('./next-i18next.config.cjs').then(
    (mod) => mod.default
)

const nextConfig = {
    i18n
}

export default withPigment(nextConfig)