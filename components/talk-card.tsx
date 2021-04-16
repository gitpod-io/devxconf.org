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

// eslint-disable-next-line
// @ts-nocheck

import { Image as ImageProps, Talk } from '@lib/types';
import { format, isAfter, isBefore, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { hyphenate } from './speakers-grid';
import { isEurope } from 'utils/helpers';
import { speakers } from 'contents';
import styles from './talk-card.module.css';

type Props = {
  key: string;
  talk: Talk;
  showTime: boolean;
};

const formatDate = (date: string) => {
  console.log(date);
  // https://github.com/date-fns/date-fns/issues/946
  // return format(parseISO(date), "h:mmaaaaa'm'");
  return date;
};

const Avatar = ({ name, image }: { name: string; image: ImageProps }) => (
  <img
    loading="lazy"
    alt={name}
    className={styles.avatar}
    src={`/speakers/${image.url}`}
    title={name}
  />
);

export default function TalkCard({ talk: { title, speaker, start, end, isLinkLess }, showTime }: Props) {
  const [isTalkLive, setIsTalkLive] = useState(false);
  const [startAndEndTime, setStartAndEndTime] = useState('');
  // eslint-disable-next-line
  const slug = hyphenate(speaker.name || speaker[0].name)

  useEffect(() => {
    const now = Date.now();
    setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, []);

  const renderCardBody = () => (
    <div className={styles['card-body']}>
      <h4 title={title} className={styles.title}>
        {title}
      </h4>
      {undefined !== speaker ? (
        <div className={styles.speaker}>
          <div className={styles['avatar-group']}>
            {speaker.length ? (
              // eslint-disable-next-line
              speaker.map(s => <Avatar name={s.name} image={s.image} />)
            ) : (
              <Avatar name={speaker.name} image={speaker.image} />
            )}
          </div>
          <h4 className={styles['speaker-name']}>
            {speaker.length === 2 ? `${speaker[0].name} and ${speaker[1].name}` : speaker.name}
          </h4>
        </div>
      ) : null}
    </div>
  );

  return (
    <div key={title} className={styles.talk}>
      {showTime && (
        <p className={styles.time}>
          {startAndEndTime || <>&nbsp;</>} {isEurope() ? 'CEST' : 'PT'}
        </p>
      )}
      { isLinkLess ? (
        <div
          className={cn(styles.card, {
            [styles['is-live']]: isTalkLive
          })}
        >
          {renderCardBody()}
        </div>
      ) : (
        <Link href={`/speakers/${slug}`}>
          <a
            className={cn(styles.card, {
              [styles['is-live']]: isTalkLive
            })}
          >
            {renderCardBody()}
          </a>
        </Link>
      )}
    </div>
  );
}
