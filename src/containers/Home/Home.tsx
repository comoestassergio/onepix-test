import { memo } from "react"
import Logo from "../../components/Logo/Logo"
import styles from './Home.module.scss'

function Home () {
    return (
        <section className={styles.home}>
            <Logo />
            <button type="button" className={styles.button}>
                <span className={styles.button__text}>листайте вниз</span>
                <span className={styles.button__line}></span>
            </button>
        </section>
    )
}

export default memo(Home)
