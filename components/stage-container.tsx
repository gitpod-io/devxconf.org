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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

// import { DiscordLogo } from './pages/community';
// import Link from 'next/link';
import ScheduleSidebar from './schedule-sidebar';
import { Stage } from '@lib/types';
// import cn from 'classnames';
// import { hyphenate } from './speakers-grid';
import styles from './stage-container.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type Props = {
  stage?: Stage;
  stages?: Stage[];
};

export default function StageContainer({ stages }: Props) {
  const slug = useRouter().query.slug;

  const streamId = stages?.find(s => s.slug === slug)?.stream

  useEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    document.body.classList.add('full');
    main?.classList.add('stage-main');
    footer?.classList.add('stage-footer');

    return () => {
      document.body.classList.remove('full');
      main?.classList.remove('stage-main');
      footer?.classList.remove('stage-footer');
    };
  });

  return (
    <div className={styles.row}>
      <div className={styles.container}>
        <div className={styles.streamContainer}>
          <div className={styles.stream}>
            <div className={styles.yt}>
              <iframe
                src={`https://www.youtube.com/embed/${streamId}?autoplay=1&amp;mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <ScheduleSidebar stages={stages} />
      </div>
    </div>
  );
}
