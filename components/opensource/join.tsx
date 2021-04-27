import React from 'react';
import Section from '@components/layout/section';
import cn from 'classnames';
import styles from './join.module.css';

const Join = () => (
  <Section>
    <div className="row">
      <div className={styles.wrapper}>
        <h2 className={cn("heading-secondary", styles.title)}>
          Do you want to join in on our journey of funding open source?
        </h2>
        <div className="wrapper-small">
          <p className={styles['intro-p']}>Here is what you can do:</p>
          <ol className={styles.list}>
            <li>
              <span>1- </span>Generate the bill of materials in your commerical software.
            </li>
            <li>
              <span>2- </span>Identify whom your unpaid vendors are.
            </li>
            <li>
              <span>3- </span>Mitigate your supply chain risks by funding open-source maintainers.
            </li>
          </ol>

          <h2 className="heading-quadrary">Shape the future you want to live in</h2>
          <p>
            When Heartbleed was discovered, OpenSSL was maintained by a handful of volunteers and
            only one of whom worked full-time. The security flaw caused billions of dollars of
            economic damage yet at the time yearly support to the OpenSSL project only US$2,000.
          </p>
          <p>
            Much has changed since the 1st of Feburary 2012 and the infrastructure to financially
            support open-source maintainers now exists thanks to the efforts of OpenCollective and
            GitHub Sponsors.
          </p>
          <p>
            It is important that we all do our part in funding maintainers as it is importance that
            maintainers achieve income diversity as that enables roadmap and project independence.
          </p>
          <p>
            There are less than 2100 people in the inner GitHub maintainer community. What would the
            future look like if they empowered to become independent artists?
          </p>
          <p>
            If one of those people can help more people better understand a technology or improve
            the developer experience for an entire ecosystem what is the worth/value of that and why
            aren’t we doing that yet?
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Join;
