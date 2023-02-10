import { memo, ReactNode } from "react"
import styles from './Main.module.scss'

type Props = {
    children: ReactNode | ReactNode []
}

function Main ({ children }: Props) {
    return (
        <main className={styles.main}>{children}</main>
    )
}

export default memo(Main)