import cn from 'classnames';
import styles from './developer-productivity.module.css';

const DeveloperProductivity = () => (
  <div className="row">
    <div className={styles.section}>
      <div className={styles.header}>
        <img
          src="/patterns/productivity-title-pattern.svg"
          aria-hidden="true"
          className={styles['dotted-line']}
        />
        <h2 className={cn(styles.title, 'heading-secondary')}>
          Bring back joy <br />
          and speed to
          <br /> our workflows.
        </h2>
        <img className={styles["dotted-line-horizontal"]} src="/patterns/horizontal-line.svg" aria-hidden={true}/>
      </div>
      <p>
        With DevX Conf we want to create a space for creators where we can start from&nbsp;first
        principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds
        to make developers feel like everything is at their fingertips. The goal is to foster an
        ecosystem that sparks dialogue and establishes best practices and frameworks across four
        different areas.
      </p>
    </div>
  </div>
);

export default DeveloperProductivity;
