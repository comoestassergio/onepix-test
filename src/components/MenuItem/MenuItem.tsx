import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode, memo } from "react"
import styles from './MenuItem.module.scss'


type Props = {
    children: ReactNode | ReactNode []
    href: string
}& DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

function MenuItem ({ children, href, ...props }: Props) {
    return (
        <a href={href} className={styles.menuItem} {...props}>{children}</a>
    )
}

export default memo(MenuItem)