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

import DeveloperProductivity from './developer-productivity';
import Link from 'next/link';
import { PatternHalfCircle } from '@components/patterns';
import RegisterButton from './register-button';
import cn from 'classnames';
import styleUtils from '../utils.module.css';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <PatternHalfCircle
        styles={{
          position: 'absolute',
          left: '-15px'
        }}
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
        <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
          The first <span className={styles.brand}>{BRAND_NAME}</span>
          <br className={styleUtils['show-on-desktop']} /> conference
        </h1>
        <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
          <p>{DATE}</p>
          &nbsp;-&nbsp;
          <p>Virtual</p>
        </div>
        <RegisterButton />
        <p className={styles.footnote}>
          With your registration, you agree to DevX Conf’s <Link href="#">DE&I</Link>,{' '}
          <Link href="/tos">ToS</Link> and <Link href="privacy-policy">Privacy Policy</Link>.
        </p>
      </div>
      <PatternHalfCircle
        isInverted={true}
        styles={{
          position: 'absolute',
          right: '-15px',
          height: '400px'
        }}
      />
      <DeveloperProductivity />
    </div>
  );
}
