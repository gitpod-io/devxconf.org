import React from 'react';
import { TwitterHandle } from '@components/follow-us-on-twitter';
import styles from './already-registered.module.css'

const AlreadyRegistered = () => (
    <div className={styles.container}>
        <TwitterHandle className={styles.handle} />
        <p>You have already registered.<br />Follow us on Twitter to stay updated.</p>
    </div>
);

export default AlreadyRegistered;
