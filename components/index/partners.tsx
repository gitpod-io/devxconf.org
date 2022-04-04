import Partner, { PartnerProps } from './partner';

import Section from '@components/layout/section';
import SectionHeader from '@components/layout/section-header';
import styles from './partners.module.css';
import classNames from 'classnames';

const Partners = () => (
  <Section className={styles.section}>
    <div className="row">
      <SectionHeader className="wrapper-small">
        <h2 className="heading-secondary">Last year’s sponsors</h2>
        <p>Promote your technologies and demonstrate your thought leadership in the DevX landscape.</p>
      </SectionHeader>
      <a href="mailto:contact@devxconf.org?subject=Sponsorship request" className={classNames("btn", styles.btn)} >
        BECOME A SPONSOR
      </a>
      {/* <div className={styles.sponsors}>
        {partners.map((partner, i) => (
          <Partner key={i} {...partner} />
        ))}
      </div> */}
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
