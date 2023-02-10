import { memo } from "react"
import Logo from "../../components/Logo/Logo"
import styles from './Home.module.scss'

function Home () {

    const handleScrollDown = () => {
        window.scroll({
            top: window.innerHeight,
            left:0,
            behavior: 'smooth',
        })
    }

    return (
        <section className={styles.home}>
            <Logo />
            <button onClick={handleScrollDown} type="button" className={styles.button}>
                <span className={styles.button__text}>листайте вниз</span>
                <span className={styles.button__line}></span>
            </button>
        </section>
    )
}

export default memo(Home)
