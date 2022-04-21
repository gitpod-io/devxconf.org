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

import { Sponsor } from '@lib/types';
import cn from 'classnames';
import styles from './sponsor-section.module.css';

type Props = {
  sponsor: Sponsor;
};

export default function SponsorSection({ sponsor }: Props) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.yt}>
          {sponsor.youtubeSlug ? (
            <iframe
              className={styles.video}
              allow="picture-in-picture"
              allowFullScreen
              frameBorder="0"
              height="100%"
              src={`https://youtube.com/embed/${sponsor.youtubeSlug}`}
              title={sponsor.name}
              width="100%"
            />
          ) : (
            <img
              src={sponsor.image || '/yt-placeholder.svg'}
              alt={sponsor.image ? sponsor.name : 'Youtube'}
            />
          )}
        </div>
        <div className={styles.container}>
          <div className={styles['img-container']}>
            {!sponsor.cardImage ? (
              <a href={sponsor.callToActionLink} target="_blank">
                <img src={sponsor.logo.url} alt={sponsor.name} className={sponsor.logo.className} />
              </a>
            ) : null}
          </div>
          {typeof sponsor.description === 'string' ? (
            <p className={styles.description}>{sponsor.description}</p>
          ) : (
            sponsor.description.map(d => <p className={styles.description}>{d}</p>)
          )}
          <div className={styles['sponsor-details']}>
            {sponsor.callToAction ? (
              <a
                href={sponsor.callToActionLink}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn"
              >
                {sponsor.callToAction}
              </a>
            ) : null}
            {/* <a
              href={sponsor.discord}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn--secondary"
            >
              Chat on Discord
            </a> */}
          </div>
          {sponsor.links ? (
            <>
              <img
                className={styles.pattern}
                src="/patterns/horizontal-line.svg"
                aria-hidden={true}
              />
              <div className={styles.resources}>
                <h2 className={cn('heading-tertiary', styles['resources-title'])}>Resources</h2>
                {sponsor.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    <span className={styles.truncate}>{link.text}</span>
                  </a>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
