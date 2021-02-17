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
import styles from './sponsors-grid.module.css';

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <Link key={sponsor.name} href={`/expo/${sponsor.slug}`}>
      <a role="button" tabIndex={0} className={cn(styles.card, 'sponsor-card')}>
        <div className={styles.imageWrapper}>{sponsor.cardImage}</div>
        {sponsor.tier !== 'start-up' && (
          <div className={styles.cardBody}>
            <div>
              <h2 className={styles.name}>{sponsor.name}</h2>
              <p className={styles.description}>{sponsor.description}</p>
            </div>
          </div>
        )}
      </a>
    </Link>
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
