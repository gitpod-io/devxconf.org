import Partner, { PartnerProps } from './partner';

import Section from '@components/layout/section';
import SectionHeader from '@components/layout/section-header';
import styles from './partners.module.css';

const partners: PartnerProps[] = [
  {
    title: 'CodeSee',
    logo: 'codesee.svg',
    website: 'https://www.codesee.io/'
  },
  {
    title: 'Sourcegraph',
    logo: 'sourcegraph.svg',
    website: 'https://about.sourcegraph.com/'
  },
  {
    title: 'Raycast',
    logo: 'raycast.svg',
    website: 'https://raycast.com/'
  },
  {
    title: 'Optic',
    logo: 'useoptic.svg',
    website: 'https://useoptic.com/'
  },
  {
    title: 'slim.ai',
    logo: 'slim-ai.svg',
    website: 'https://www.slim.ai/'
  },
  {
    title: 'CNCF',
    logo: 'cnfc.svg',
    website: 'https://www.cncf.io/'
  },
  {
    title: 'CloudQuery',
    logo: 'cloudquery.svg',
    website: 'https://www.cloudquery.io/'
  },
];

const Partners = () => (
  <Section className={styles.section}>
    <div className="row">
      <SectionHeader className="wrapper-small">
        <h2 className="heading-secondary">Partners</h2>
        <p>Promote your technologies and demonstrate your thought leadership in the DevX landscape.</p>
      </SectionHeader>
      <a href="mailto:contact@devxconf.org?subject=Sponsorship request" className="btn">
        BECOME A SPONSOR
      </a>
      <div className={styles.sponsors}>
        {partners.map((partner, i) => (
          <Partner key={i} {...partner} />
        ))}
      </div>
      <div className="wrapper-small">
        {/* <p className={styles.footnote}>
          More details and different sponsorship options, you can find in our sponsorship
          prospectus.
        </p> */}
        <a href="/prospectus.pdf" target="_blank" className="btn btn--secondary">
          See Prospectus
        </a>
      </div>
    </div>
  </Section>
);

export default Partners;
