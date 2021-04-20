import React from 'react';
import Section from './layout/section';
import cn from 'classnames';
import styles from './about.module.css';

const About = () => (
  <div className="row">
    <Section className={styles.section}>
      <img src="/patterns/vertical-line.svg" className={styles.pattern} aria-hidden={true} />
      <div className={styles.contents}>
        <h2 className="heading-secondary">About</h2>
        <p>
          The conference is organized by Gitpod, an open-source developer platform for automated dev environments.
        </p>
        <div className={cn(styles.live, 'heading-quadrary')}>All About DevX</div>
        <a href="https://www.gitpod.io/" target="_blank" className={styles.link}>
          <img src="/gitpod.svg" alt="Gitpod" />
        </a>
      </div>
    </Section>
  </div>
);

export default About;
