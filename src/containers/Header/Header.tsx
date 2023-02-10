import { memo, useState } from "react"
import Burger from "../../components/Burger/Burger"
import styles from './Header.module.scss'

type Props = {
    scrollFromTop: number | undefined
}

function Header ({ scrollFromTop }: Props) {

    const isOpen = () => {
        if (scrollFromTop) {
            return scrollFromTop >= window.innerHeight
        }
    }
    
    return (
        <header className={styles.header}>
            <Burger height="50" width="50" open={isOpen()} />
        </header>   
    )
}

export default memo(Header)