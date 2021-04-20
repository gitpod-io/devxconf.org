import React from 'react';
import Section from '@components/layout/section';
import styles from './vote.module.css';

const Vote = () => (
  <Section>
    <div className="row">
      <div className={styles.wrapper}>
        <h2 className="heading-secondary">Vote for your favourite open-source project</h2>
        <p>
          And we’ll fund the winning project with a{' '}
          <span className={styles.imp}>$5k donation.</span>
        </p>
      </div>
    </div>
  </Section>
);

export default Vote;
