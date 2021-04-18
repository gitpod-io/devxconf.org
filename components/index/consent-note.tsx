import Link from 'next/link';
import React from 'react';
import styles from './consent-note.module.css'

const ConsentNote = () => (
  <p className={styles.note}>
    With your registration, you agree to DevX Conf’s{' '}
    <Link href="/code-of-conduct"><a>Code of Conduct</a></Link>,{' '}
    <Link href="privacy-policy"><a>Privacy Policy</a></Link> and its <Link href="/diversity">DE&I</Link> values.
  </p>
);

export default ConsentNote;
