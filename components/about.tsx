import React from 'react';
import Section from './layout/section';
import styles from './about.module.css';

const About = () => (
  <Section className={styles.section}>
    <img src="/patterns/vertical-line.png" aria-hidden={true} />
    <div className={styles.contents}>
      <h2 className="heading-tertiary">About</h2>
      <p>
        The conference is organized by Gitpod, the open-source developer platform for automated dev
        environments.
      </p>
      <div className={styles.live}>
        WE LIVE DEVX
      </div>
      <img src="/gitpod.svg" alt="Gitpod" />
    </div>
  </Section>
);

export default About;
