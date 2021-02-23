import Sponsor, { SponsorProps } from './sponsor';

import Section from '@components/layout/section';
import SectionHeader from '@components/layout/section-header';
import cn from 'classnames';
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
];

const Sponsors = () => (
  <Section className={styles.section}>
    <div className="row">
      <SectionHeader className="wrapper-small">
        <h2 className={cn('heading-secondary', styles['sponsors-title'])}>Sponsors</h2>
        <p>Promote your technologies and demonstrate your thought leadership in the DevX landscape.</p>
      </SectionHeader>
      <a href="" className="btn">
        BECOME A SPONSOR
      </a>
      <div className={styles.sponsors}>
        {sponsors.map((sponsor, i) => (
          <Sponsor key={i} {...sponsor} />
        ))}
      </div>
      <div className="wrapper-small">
        <p>
          More details and different sponsorship options, you can find in our sponsorship
          prospectus.
        </p>
        <a href="#" className="btn btn--secondary">
          See Prospectus
        </a>
      </div>
    </div>
  </Section>
);

export default Sponsors;
