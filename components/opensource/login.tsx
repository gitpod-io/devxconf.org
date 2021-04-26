import GitHubButton from '@components/index/github-button';
import React, { useState } from 'react';
import Popup from '../popup';
import styles from './login.module.css';

const Login = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Popup isShown={true} setIsShown={setIsShown}>
      <div className={styles.wrapper}>
        <h2>Authenticate with GitHub or Email in order to vote.</h2>
        <GitHubButton text="Authenticate with" />
        <a role="button">Authenticate with Email</a>
      </div>
    </Popup>
  );
};

export default Login;
