import { memo} from "react"
import styles from './Footer.module.scss'

function Footer () {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <footer className={styles.footer}>
            <p>{currentYear}</p>
            <p>разработано onepix</p>
            <p>все права защищены</p>
        </footer>
    )
}

export default memo(Footer)