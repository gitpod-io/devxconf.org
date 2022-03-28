/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BRAND_NAME, DATE } from '@lib/constants';

import ConsentNote from './consent-note';
import DeveloperProductivity from './developer-productivity';
import { PatternHalfCircle } from '@components/patterns';
import Popup from '@components/popup';
import GitHubButton from './github-button';
import RegisterWithEmail from './register-with-email';
import cn from 'classnames';
import styleUtils from '../utils.module.css';
import styles from './hero.module.css';
import { useState } from 'react';


export default function Hero() {
  const [isRegisterWithEmailSelected, setIsRegisterWithEmailSelected] = useState(false);

  return (
    <div className={styles.wrapper}>
      <PatternHalfCircle
        styles={{
          position: 'absolute',
          left: '-5px'
        }}
        className={styles.pattern}
      />
      <div className="row">
        {/* <h2
           className={cn(
             styleUtils.appear,
             styleUtils['appear-third'],
             styleUtils['show-on-mobile'],
             styles.description
           )}
         >
           {SITE_DESCRIPTION}
         </h2> */}
        <h1 className={styles.hero}>
          <span className={styles.brand}>{BRAND_NAME}</span>
          <br className={styleUtils['show-on-desktop']} /> conference
        </h1>
        <div className={cn(styles.info, 'heading-quadrary')}>{DATE}&nbsp;-&nbsp;Virtual</div>
        <GitHubButton text="Register with" />
        <p className={styles.footnote}>
          <button
            className={styles['register-with-email']}
            onClick={() => setIsRegisterWithEmailSelected(true)}
          >
            Register via email
          </button>
        </p>
        <Popup
          isShown={isRegisterWithEmailSelected}
          setIsShown={setIsRegisterWithEmailSelected}
          bodyStyles={{ display: 'flex', justifyContent: 'center' }}
        >
          <RegisterWithEmail title="Register with your email" isConsentNoteShown={true} />
        </Popup>
        <ConsentNote />
      </div>
      <PatternHalfCircle
        isInverted={true}
        styles={{
          position: 'absolute',
          right: '-15px',
          height: '400px'
        }}
        className={styles.pattern}
      />
      <DeveloperProductivity />
    </div>
  );
}
