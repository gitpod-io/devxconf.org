import React from 'react';
import styles from './registeration-success.module.css'

const RegisterationSuccess = () => (
  <div className={styles.container}>
      <img src="/tick.svg" alt="Tick"/>
      <p>Thanks for your registration. You will receive an email confirmation shortly.</p>
  </div>
);

export default RegisterationSuccess;
