import { memo, useEffect, useState } from "react"
import cn from 'classnames'

import Burger from "../../components/Burger/Burger"
import Logo from "../../components/Logo/Logo"
import styles from './Header.module.scss'

type Props = {
    scrollFromTop: number | null
}

function Header ({ scrollFromTop }: Props) {

    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(() => {
        if (scrollFromTop! >= window.innerHeight) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [scrollFromTop])
    
    return (
        <header className={cn(styles.header, {[styles.open]: isOpen})}>
            {isOpen && <Logo className={styles.logo} />}
            <Burger height="50" width="50" open={isOpen} />
        </header>   
    )
}

export default memo(Header)