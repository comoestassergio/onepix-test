import { memo } from "react"
import Burger from "../../components/Burger/Burger"
import styles from './Header.module.scss'

function Header () {
    return (
        <header className={styles.header}>
            <Burger height="50" width="50" />
        </header>   
    )
}

export default memo(Header)