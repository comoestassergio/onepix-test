import { memo } from "react"
import Logo from "../../components/Logo/Logo"
import styles from './Home.module.scss'

function Home () {
    return (
        <section className={styles.home}>
            <Logo />
        </section>
    )
}

export default memo(Home)
