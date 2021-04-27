import React from 'react';
import styles from './registeration-success.module.css';

const RegisterationSuccess = ({
  text = 'Thanks for your registration. You will receive an email confirmation shortly.'
}: {
  text?: string;
}) => (
  <div className={styles.container}>
    <img src="/tick.svg" alt="Tick" />
    <p>{text}</p>
  </div>
);

export default RegisterationSuccess;
