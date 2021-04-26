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

import Link from 'next/link';
import { Sponsor } from '@lib/types';
import cn from 'classnames';
import { hyphenate } from './speakers-grid';
import styles from './sponsors-grid.module.css';

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const renderBody = () => (
    <>
      <div className={styles.imageWrapper}>
        {!sponsor.cardImage ? (
          <img className={styles.image} style={{transform: sponsor.transform}} src={`${sponsor.logo.url}`} alt={sponsor.name} />
        ) : (
          sponsor.cardImage
        )}
      </div>
      {sponsor.tier !== 'start-up' && (
        <div className={styles.cardBody}>
          <div>
            <h2 className={cn(styles.name, 'heading-quadrary')}>{sponsor.name}</h2>
            <p className={styles.description}>
              {typeof sponsor.description === 'string'
                ? sponsor.description
                : sponsor.description[0]}
            </p>
          </div>
        </div>
      )}
    </>
  );

  return sponsor.tier !== 'start-up' ? (
    <Link key={sponsor.name} href={`/expo/${hyphenate(sponsor.name)}`}>
      <a role="button" tabIndex={0} className={cn(styles.card, 'sponsor-card')}>
        {renderBody()}
      </a>
    </Link>
  ) : (
    <a href={sponsor.website} target="_blank" className={cn(styles.card, 'sponsor-card')}>{renderBody()}</a>
  );
}

type Props = {
  sponsors: Sponsor[];
};

export default function SponsorsGrid({ sponsors }: Props) {
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');
  const otherSponsors = sponsors.filter(s => s.tier === 'start-up');

  return (
    <div className="row">
      {goldSponsors.length ? (
        <div className={styles.category}>
          <h3 className="heading-tertiary">Gold</h3>
          <div className={styles.grid}>
            {goldSponsors.map(sponsor => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      ) : null}

      {silverSponsors.length ? (
        <div className={styles.category}>
          <h3 className="heading-tertiary">Silver</h3>
          <div className={styles.grid}>
            {silverSponsors.map(sponsor => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      ) : null}

      {otherSponsors.length ? (
        <div className={styles.category}>
          <h3 className="heading-tertiary">Start-Up</h3>
          <div className={styles.grid}>
            {otherSponsors.map(sponsor => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
