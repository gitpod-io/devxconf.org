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

import { useEffect, useState } from 'react';

import { DiscordLogo } from './pages/community';
import EnterStage from './stage/enter-stage';
import Link from 'next/link';
import ScheduleSidebar from './schedule-sidebar';
import { Stage } from '@lib/types';
import { allStages } from 'contents/schedule-and-stage';
import cn from 'classnames';
import { getIsLoggedIn } from '../utils/helpers';
import styles from './stage-container.module.css';

type Props = {
  stage: Stage;
};

export default function StageContainer({ stage }: Props) {
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!getIsLoggedIn());
  });

  return (
    <div className={cn('row', styles.row)}>
      <div className={styles.container}>
        <div className={styles.streamContainer}>
          {loggedIn === true ? (
            <div className={styles.stream}>
              <div className={styles.yt}>
                <img src="/yt-placeholder.svg" alt="Youtube" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.messageContainer}>
                  <h2 className="heading-tertiary">{stage.name}</h2>
                  <p>Short description</p>
                </div>
                <div className={styles['btn-container']}>
                  <a
                    target="_blank"
                    href="https://discord.gg/7m562hZv"
                    rel="noopener noreferrer"
                    className={cn('btn btn--big', styles['chat-button'])}
                  >
                    Join Live Chat <DiscordLogo />
                  </a>
                  <Link href={`/speakers/${stage.slug}`}>
                    <a className="btn btn--secondary">See Speaker Profile</a>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <EnterStage setLoggedIn={setIsLoggedIn} />
          )}
        </div>
        <ScheduleSidebar allStages={allStages} />
      </div>
    </div>
  );
}
