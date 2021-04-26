import React from 'react';
import { TwitterHandle } from '@components/follow-us-on-twitter';
import styles from './already-registered.module.css';

const AlreadyRegistered = ({ text }: { text?: string }) => (
  <div className={styles.container}>
    {!text ? (
      <>
        <TwitterHandle className={styles.handle} />
        <p>
          You have already registered.
          <br />
          Follow us on Twitter to stay updated.
        </p>
      </>
    ) : <>
            <img src="/tick.svg" alt="Tick" />
            <p>{text}</p>
        </>    
    }
  </div>
);

export default AlreadyRegistered;
