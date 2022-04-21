import cn from 'classnames';
import styles from './section.module.css'

interface SectionProps {
    children: JSX.Element | JSX.Element[]
    className?: string;
    id?: string;
    styles?: React.CSSProperties;
}

const Section = ({children, className, id, styles: css}: SectionProps) => (
    <section className={cn(styles.section, className )} id={id} style={css}>
        {children}
    </section>
)

export default Section