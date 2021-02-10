import cn from 'classnames'
import styles from './section-header.module.css'

interface SectionHeaderProps {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const SectionHeader = ({children, className}: SectionHeaderProps) => (
    <div 
        className={cn(styles["section-header"], className)}
    >
        {children}
    </div>
)

export default SectionHeader