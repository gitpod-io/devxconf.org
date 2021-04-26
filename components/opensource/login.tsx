import GitHubButton from '@components/index/github-button';
import RegisterWithEmail from '@components/index/register-with-email';
import React, { useState } from 'react';
import Popup from '../popup';
import styles from './login.module.css';

const Login = ({ shown, setShown }: { shown: boolean; setShown: any }) => {
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);

  return (
    <Popup isShown={shown} setIsShown={setShown}>
      <div className={styles.wrapper}>
        <h2>Authenticate with GitHub or Email in order to vote.</h2>
        {!isRegisterFormShown ? (
          <>
            <GitHubButton text="Authenticate with" />
            <a
              role="button"
              className={styles.authenticate}
              onClick={() => setIsRegisterFormShown(true)}
            >
              Authenticate with Email
            </a>
          </>
        ) : null}
        {isRegisterFormShown ? (
          <RegisterWithEmail buttonText="Authenticate" successText="Thanks. You can now vote." />
        ) : null}
      </div>
    </Popup>
  );
};

export default Login;
