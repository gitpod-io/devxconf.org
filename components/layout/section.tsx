import cn from 'classnames';
import styles from './section.module.css'

interface SectionProps {
    children: JSX.Element | JSX.Element[]
    className?: string
    id?: string
}

const Section = ({children, className, id}: SectionProps) => (
    <section className={cn(styles.section, className )} id={id}>
        {children}
    </section>
)

export default Section