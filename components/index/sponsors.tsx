import Sponsor, { SponsorProps } from './sponsor';

import Section from '@components/layout/section';
import SectionHeader from '@components/layout/section-header';
import cn from 'classnames'
import styles from './sponsors.module.css';

const sponsors: SponsorProps[] = [
  {
    title: 'GitLab',
    logo: 'gitlab.svg',
    website: 'https://gitlab.com/'
  },
  {
    title: 'Google Cloud',
    logo: 'google-cloud.svg',
    website: 'https://cloud.google.com/'
  },
  {
    title: 'Uber',
    logo: 'uber.svg',
    website: 'https://www.uber.com'
  },
  {
    title: 'Mozilla',
    logo: 'mozilla.svg',
    website: 'https://www.mozilla.org/en-US/'
  },
  {
    title: 'GitLab',
    logo: 'gitlab.svg',
    website: 'https://gitlab.com/'
  },
  {
    title: 'Google Cloud',
    logo: 'google-cloud.svg',
    website: 'https://cloud.google.com/'
  },
  {
    title: 'Uber',
    logo: 'uber.svg',
    website: 'https://www.uber.com'
  },
  {
    title: 'Mozilla',
    logo: 'mozilla.svg',
    website: 'https://www.mozilla.org/en-US/'
  }
]

const Sponsors = () => (
  <Section>
    <SectionHeader>
      <h2 className={cn("heading-secondary", styles["sponsors-title"])}>
      {/* <img src="/pattern-square.png" aria-hidden={true}/> */}
        Sponsors
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    </SectionHeader>
    <a href="" className="btn">
      BECOME A SPONSOR
    </a>
    <div className={styles.sponsors}>
      {
        sponsors.map((sponsor, i) => ( 
          <Sponsor
            key={i}
            {...sponsor}
          />
        ))
      }
    </div>
  </Section>
);

export default Sponsors;
