// eslint-disable-next-line
// @ts-nocheck

import React, { useState } from 'react';

import cn from 'classnames';
import styles from './enter-stage.module.css';
import GitHubButton from '@components/index/github-button';
import RegisterWithEmail from '@components/index/register-with-email';

const EnterStage = ({ setLoggedIn }: props) => {
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);

  return (
    <div className={cn('row', styles.row, 'wrapper-small')}>
      <h1 className="heading-secondary">Join the conference</h1>
      <p>
        DevX Conf is a space for creators where we can start from first principles, collaborate,
        listen, discuss and declutter our workflows, toolchains and minds. To improve developer
        experience.
      </p>
      {!isRegisterFormShown ? (
        <>
          <GitHubButton setLoggedIn={setLoggedIn} text="Join with" />
          <a
            role="button"
            className={styles.authenticate}
            onClick={() => setIsRegisterFormShown(true)}
          >
            Join with Email
          </a>
        </>
      ) : (
        <RegisterWithEmail
          setLoggedIn={setLoggedIn}
          buttonText="Join Now"
          successText="Thanks. You will be redirected to the conference stage."
        />
      )}
    </div>
  );
};

export default EnterStage;
