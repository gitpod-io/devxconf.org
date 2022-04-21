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

import GithubIcon from '@components/icons/icon-github';
import { Speaker } from '@lib/types';
import React from 'react';
import styles from './speaker-section.module.css';

const TwitterIcon = () => (
  <svg width={24}  className="speaker__contact-icon" viewBox="0 0 24 24" fill="var(--grey)" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.643 4.93695C22.808 5.30695 21.911 5.55695 20.968 5.66995C21.93 5.09395 22.668 4.17995 23.016 3.09195C22.116 3.62595 21.119 4.01395 20.058 4.22195C19.208 3.31795 17.998 2.75195 16.658 2.75195C14.086 2.75195 12 4.83795 12 7.41195C12 7.77595 12.042 8.12995 12.12 8.47195C8.24701 8.27695 4.81601 6.42195 2.51801 3.60395C2.11801 4.29395 1.88801 5.09395 1.88801 5.94595C1.88801 7.56195 2.71101 8.98895 3.96001 9.82395C3.19601 9.79895 2.47801 9.58995 1.85001 9.24095V9.30095C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75195 21.327 7.54995 21.318 7.34995C22.228 6.69195 23.018 5.87295 23.641 4.93995L23.643 4.93695Z"
      fill="var(--grey)"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"  className="speaker__contact-icon" width="24" viewBox="0 0 16 17">
    <g clipPath="url(#clip0)">
      <path
        fill="var(--grey)"
        d="M12.667.867H3.333A3.333 3.333 0 000 4.201v9.333a3.334 3.334 0 003.333 3.333h9.334A3.334 3.334 0 0016 13.534V4.2A3.334 3.334 0 0012.667.867zM5.333 13.534h-2V6.2h2v7.333zm-1-8.179a1.176 1.176 0 11-.018-2.352 1.176 1.176 0 01.018 2.352zm9 8.179h-2V9.8c0-2.246-2.666-2.076-2.666 0v3.733h-2V6.2h2v1.176c.933-1.724 4.666-1.851 4.666 1.65v4.507z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z" transform="translate(0 .867)"></path>
      </clipPath>
    </defs>
  </svg>
);

type Props = {
  speaker: Speaker;
  type?: "speaker" | "host";
};

export default function SpeakerSection({ speaker, type }: Props) {
  return (
    <>
      <div key={speaker.name} className={styles.container}>
        <div className={styles['img-container']}>
          <div className={styles['img-bg']}>
            <img
              alt={speaker.name}
              title={speaker.name}
              src={`${type === 'speaker' ? '' : '/speakers/'}${speaker.image.url}`}
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles['text-content']}>
          <div>
            <div className={styles.header}>
              <h1 className="heading-secondary">{speaker.name}</h1>
              <div className={styles.title}>
                {`${speaker.title} ${speaker.company ? "@" : ""}`}
                <span>{speaker.company}</span>
              </div>
            </div>

            {speaker.bio ? (
              <>
                <h2 className="heading-quadrary">Bio</h2>
                <div dangerouslySetInnerHTML={{
                  // eslint-disable-next-line
                  // @ts-ignore
                  __html: speaker.bio
                }} /> </>
            ) : null}
            <h2 className="heading-quadrary">Contact</h2>
            <div className={styles.icons}>
              {speaker.twitter ? (
                <a
                  aria-label="Twitter"
                  href={`https://twitter.com/${speaker.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              ) : null}
              {speaker.github ? (
                <a
                  aria-label="GitHub"
                  href={`https://github.com/${speaker.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="speaker__contact-icon" color="var(--grey)" size={24} />
                </a>
              ) : null}
              {speaker.linkedin ? (
                <a
                  aria-label="GitHub"
                  href={`https://www.linkedin.com/in/${speaker.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                </a>
              ) : null}
            </div>
            {speaker.abstract ? (
              <>
                <h2 className="heading-quadrary">Abstract</h2>
                <div className={styles.abstract} dangerouslySetInnerHTML={{__html: speaker.abstract}}/>
              </>
            ) : null}
          </div>
        </div>
      </div>
      {speaker.talk && (
        <div>
          <h3>{speaker.talk.title}</h3>
          <p>{speaker.talk.description}</p>
        </div>
      )}
    </>
  );
}
