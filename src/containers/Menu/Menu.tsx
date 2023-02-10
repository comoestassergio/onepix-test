import { memo } from "react"
import MenuItem from "../../components/MenuItem/MenuItem"
import styles from './Menu.module.scss'

function Menu () {
    return (
        <section className={styles.menu}>
            <MenuItem href="#">главная</MenuItem>
            <MenuItem href="#">каталог</MenuItem>
            <MenuItem href="#">проекты</MenuItem>
            <MenuItem href="#">контакты</MenuItem>
            <MenuItem href="#">FAQ</MenuItem>
        </section>
    )
}

export default memo(Menu)