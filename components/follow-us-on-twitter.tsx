import IconTwitter from '@components/icons/icon-twitter';
import { PatternHalfCircle } from '@components/patterns';
import React from 'react';
import Section from './layout/section';
import styles from './follow-us-on-twitter.module.css';

const FollowUsOnTwitter = () => (
  <Section className={styles.section}>
    <div className="row">
      <div className={styles['follow-us']}>
        <h2 className="heading-secondary">
          Stay updated –<br />
          follow us on Twitter
        </h2>
        <a className={styles.handle}>
          <IconTwitter className={styles.icon} />
          @DEVXCONF
        </a>
      </div>
      <PatternHalfCircle
        isInverted={true}
        styles={{
          position: 'absolute',
          top: '25%',
          right: '-15px',
          height: '600px'
        }}
      />
    </div>
  </Section>
);

export default FollowUsOnTwitter;
