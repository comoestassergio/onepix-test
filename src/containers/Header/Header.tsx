import { memo, useEffect, useState } from "react"
import Burger from "../../components/Burger/Burger"
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
        <header className={styles.header}>
            <Burger height="50" width="50" open={isOpen} />
        </header>   
    )
}

export default memo(Header)