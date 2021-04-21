// eslint-disable-next-line
// @ts-nocheck
import React, { useRef, useState } from 'react';

import AlreadyRegistered from './already-registered';
import ConsentNote from './consent-note';
import RegisterationSuccess from './registeration-success';
import cn from 'classnames';
import {setIsLoggedIn} from '../../utils/helpers'
import styles from './register-with-email.module.css';
import validator from 'validator';

const RegisterWithEmail = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [emailError, setEmailError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (e) => {
    var email = e.target.value
    if (validator.isEmail(email) || !email) { 
      setEmailError('') 
    } else {
      setEmailError('Please enter a valid email.') 
    }
  }

  const addEmail = async email => {
    try {
      const response = await fetch('/api/register-email', {
        body: JSON.stringify({email}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      if (response.status === 200) {
        setSubmitted(true);
      } else if (response.status === 400) {
        setEmailError('Please enter a valid email.') 
      } else if (response.status === 409) {
        setIsAlreadyRegistered(true);
        setSubmitted(true);
        setIsLoggedIn()
      }
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = inputRef.current?.value;
    addEmail(email);
  };

  return !submitted ? (
    <div>
      <h2 className="heading-tertiary">Register with your email</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          name="email"
          type="email"
          placeholder="Enter your email"
          autoFocus
          required
          onChange={e => validateEmail(e)}
          className={styles.input}
        />
        { 
          emailError ? <span className={styles.error}>{emailError}</span> : null
        }
        <button type="submit" className={cn('btn', styles.btn)} disabled={emailError ? true : false}>
          Register Now
        </button>
      </form>
      <ConsentNote />
    </div>
  ) : isAlreadyRegistered ? (
    <AlreadyRegistered />
  ) : (
    <RegisterationSuccess />
  );
};

export default RegisterWithEmail;
