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
      DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software.
      </p>
    </div>
  </div>
);

export default DeveloperProductivity;
