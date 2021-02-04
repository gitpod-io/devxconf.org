import styles from './section-header.module.css'

const SectionHeader = ({children}: {children: JSX.Element | JSX.Element[]}) => (
    <div className={styles["section-header"]}>
        {children}
    </div>
)

export default SectionHeader