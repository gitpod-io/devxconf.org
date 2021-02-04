import cn from 'classnames';
import styles from './section.module.css'

interface SectionProps {
    children: JSX.Element | JSX.Element[]
    className?: string
}

const Section = ({children, className}: SectionProps) => (
    <section className={cn(styles.section, className )}>
        {children}
    </section>
)

export default Section