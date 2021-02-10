import React from 'react';
import Section from './layout/section';
import styles from './about.module.css';

const About = () => (
  <div className="row">
    <Section className={styles.section}>
      <img src="/patterns/vertical-line.svg" aria-hidden={true} />
      <div className={styles.contents}>
        <h2 className="heading-secondary">About</h2>
        <p>
          The conference is organized by Gitpod, the open-source developer platform for automated
          dev environments.
        </p>
        <div className={styles.live}>WE LIVE DEVX</div>
        <img src="/gitpod.svg" alt="Gitpod" />
      </div>
    </Section>
  </div>
);

export default About;
