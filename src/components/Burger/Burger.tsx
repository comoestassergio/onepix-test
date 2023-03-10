import { memo } from "react"
import styles from './Burger.module.scss'

type Props = {
    width: string
    height: string
    open?: boolean
    className?: string
}

function Burger ({ height, width, open, className}: Props) {

    const handleScrollDown = () => {
        window.scroll({
            top: window.innerHeight,
            left:0,
            behavior: 'smooth',
        })
    }

    const handleScrollUp = () => {
        window.scroll({
            top: 0,
            left:0,
            behavior: 'smooth',
        })
    }

    if (open) {
        return (
            <button onClick={handleScrollUp} type="button" className={styles.burger + ' ' + styles.open}>
                <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9.24951" y="6.94446" width="47.8091" height="2" transform="rotate(45 9.24951 6.94446)" fill="white"/>
                    <rect x="6.94446" y="40.7505" width="47.8091" height="2" transform="rotate(-45 6.94446 40.7505)" fill="white"/>
                </svg>
            </button>
        )
    }

    return (
        <button type="button" onClick={handleScrollDown} className={styles.burger + ' ' + styles.closed}>
            <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45.8333" height="2" transform="matrix(-1 0 0 1 47.9166 12.5)" fill="white"/>
                <rect width="22.9167" height="2" transform="matrix(-1 0 0 1 47.9166 21.5)" fill="white"/>
                <rect width="45.8333" height="2" transform="matrix(-1 0 0 1 47.9166 30.5)" fill="white"/>
            </svg>
        </button>
    )
}

export default memo(Burger)