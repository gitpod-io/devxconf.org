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

import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import IconGithub from './icons/icon-github';

const GitHub = <div className={styles.github}>
    <span><IconGithub size={25} color="#111"/> GitHub</span>
</div>;

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        The first {BRAND_NAME}
        <br className={styleUtils['show-on-desktop']} /> conference
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>{DATE}</p>
        &nbsp;-&nbsp;
        <p>
          Virtual
        </p>
      </div>
      <div className={styles["btn-wrapper"]}>
        <a href="" className="btn" style={{display: 'flex'}}>Register with {GitHub}</a>
      </div>
    </div>
  );
}
