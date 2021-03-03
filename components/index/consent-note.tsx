import Link from 'next/link';
import React from 'react';
import styles from './consent-note.module.css'

const ConsentNote = () => (
  <p className={styles.note}>
    With your registration, you agree to DevX Conf’s{' '}
    <Link href="/code-of-conduct">Code of Conduct</Link> and{' '}
    <Link href="privacy-policy">Privacy Policy</Link>.
  </p>
);

export default ConsentNote;
