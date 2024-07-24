import { css } from "@pigment-css/react"

const MainPage = () => {
    return <div className={styles}>
        <h1>Hello, NextJS!</h1>
        <h2>Subheader</h2>
    </div>
}

export default MainPage

const styles = css({
    'h1': {
        color: 'darkolivegreen',
    },
    'h2': {
        color: 'darkcyan',
    }
})