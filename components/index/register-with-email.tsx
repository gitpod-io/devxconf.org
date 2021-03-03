import React, { useState } from 'react';

import ConsentNote from './consent-note';
import RegisterationSuccess from './registeration-success';
import cn from 'classnames';
import styles from './register-with-email.module.css';

const RegisterWithEmail = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return !submitted ? (
    <div>
      <h2 className="heading-tertiary">Register with your email</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" autoFocus required />
        <button type="submit" className={cn('btn', styles.btn)}>
          Register Now
        </button>
      </form>
      <ConsentNote />
    </div>
  ) : (
    <RegisterationSuccess />
  );
};

export default RegisterWithEmail;
