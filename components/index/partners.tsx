import Partner, { PartnerProps } from './partner';

import Section from '@components/layout/section';
import SectionHeader from '@components/layout/section-header';
import styles from './partners.module.css';
import classNames from 'classnames';
import { sponsors } from 'contents/expo';

const Partners = () => (
  <Section className={styles.section}>
    <div className="row">
      <SectionHeader className="wrapper-small">
        <h2 className="heading-secondary">Sponsors</h2>
        <p>Promote your technologies and demonstrate your thought leadership in the DevX&nbsp;landscape.</p>
      </SectionHeader>
      <a href="mailto:contact@devxconf.org?subject=Sponsorship request" className={classNames("btn", styles.btn)} >
        BECOME A SPONSOR
      </a>
      <div className={styles.sponsors}>
        {sponsors.map((s, i) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Partner title={s.name} logo={s.logo.url} website={s.callToActionLink || s.website} noDetailsPage={!s.image}   />
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
