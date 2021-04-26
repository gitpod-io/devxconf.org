// eslint-disable-next-line
// @ts-nocheck

import React, { useRef, useState } from 'react';

import cn from 'classnames';
import formStyles from '../index/register-with-email.module.css';
import { setIsLoggedIn } from 'utils/helpers';
import styles from './enter-stage.module.css';
import validator from 'validator';
import GitHubButton from '@components/index/github-button';
import RegisterWithEmail from '@components/index/register-with-email';

const EnterStage = ({ setLoggedIn }: props) => {
  const [emailError, setEmailError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = e => {
    const email = e.target.value;
    if (validator.isEmail(email) || !email) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email.');
    }
  };

  const addEmail = async email => {
    try {
      const response = await fetch('/api/register-email', {
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      if (response.status === 200) {
      } else if (response.status === 400) {
        setEmailError('Please enter a valid email.');
      } else if (response.status === 409) {
        setIsLoggedIn();
        setLoggedIn(true);
    setLoading(false);
      }
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = inputRef.current?.value;
    addEmail(email);
    setLoading(true);
  };

  return (
    <div className={cn('row', styles.row, 'wrapper-small')}>
      <h1 className="heading-secondary">Join the conference</h1>
      <p>
        DevX Conf is a space for creators where we can start from first principles, collaborate,
        listen, discuss and declutter our workflows, toolchains and minds. To improve developer
        experience.
      </p>
      <GitHubButton setLoggedIn={setLoggedIn} text="Login with" />
      <RegisterWithEmail setLoggedIn={setLoggedIn} buttonText="Login" successText="Thanks. You will be redirected to the conference stage." />
      {/* <form className={formStyles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={formStyles.input}
          onChange={e => validateEmail(e)}
          placeholder="Enter email to join the event"
          aria-label="Enter email to join the event"
          ref={inputRef}
        />
        { 
          emailError ? <span className={formStyles.error}>{emailError}</span> : null
        }
        {
            !loading ? <button className={cn('btn', formStyles.btn)}>Join Now</button> : <span className={formStyles.error}>Loading...</span>
        }
      </form> */}
    </div>
  );
};

export default EnterStage;
