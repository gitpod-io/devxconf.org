import IconTwitter from '@components/icons/icon-twitter';
import { PatternHalfCircle } from '@components/patterns';
import React from 'react';
import Section from './layout/section';
import cn from 'classnames'
import styles from './follow-us-on-twitter.module.css';

export interface TwitterHandleProps {
  className?: string
}

export const TwitterHandle = ({ className }: TwitterHandleProps) => (
  <a 
    href="https://twitter.com/devxconf" 
    target="_blank" 
    className={cn(styles.handle, 'heading-quadrary', className)}
  >
    <IconTwitter className={styles.icon} />
    @DEVXCONF
  </a>
);

const FollowUsOnTwitter = () => (
  <Section className={styles.section}>
    <div className="row">
      <div className={styles['follow-us']}>
        <h2 className="heading-secondary">
          Stay updated –<br />
          follow us on Twitter
        </h2>
        <TwitterHandle />
      </div>
      <PatternHalfCircle
        className={styles.pattern}
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
