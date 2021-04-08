import Layout from '@components/layout';
import { PatternHalfCircle } from '@components/patterns';
import Section from '@components/layout/section';
import Support from '@components/diversity/support';
import cn from 'classnames';
import styles from './opensource.module.css';

const Diversity = () => (
  <Layout>
    <Section className={styles.section}>
      <div className="row">
        <div className={cn(styles.header, 'wrapper-small')}>
          <div className={styles['intro-container']}>
            <img src="/patterns/opensource-title-pattern.svg" aria-hidden={true} />
            <h1 className="heading-secondary">
              It's time to
              <br />
              start giving
              <br /> back
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper-small">
          <div className={styles.features}>
            <div>
              <h2 className="heading-quadrary">The problem</h2>
              <p>
                The myriad of tools that are relied upon by developers everyday are built and
                maintained almost exclusively by unpaid volunteers, and the maintainers of
                open-source projects, our digital infrastructure, are in desperate need of financial
                support. Because code is less charismatic than a hit YouTube video or Kickstarter
                campaign, there is little public awareness of and appreciation for this work. As a
                result, there is not nearly enough institutional support for the output that sparked
                an information revolution and is the backbone of our digital reality.
              </p>
              <p>
                Just like physical infrastructure, digital infrastructure needs regular upkeep and
                maintenance. Without effective support for open-source authors work, not only will
                their labor go uncompensated, but the digital world risks security breaches,
                interruptions in service, and slowed innovation.
              </p>
            </div>
            <div>
              <h2 className="heading-quadrary">The challenge</h2>
              <p>
                As a industry we haven't established the conditions where companies are readily able
                to mitigate these risks. The free software community has spent a lot of time and
                effort at discussing user freedoms however they have been almost silent on the
                unintended consequences.
              </p>
            </div>
            <div>
              <h2 className="heading-quadrary">Diversity</h2>
              <p>
                Volunteers by definition are made up by those whom have the time to volunteer and
                paying for resources that are being consumed broadens the list of people who can do
                open-source. A recent analysis of GitHub found that just 5.4% of open source
                contributors were women, compared to roughly 15 to 20% of technical roles at
                software companies overall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="row">
        <div className={styles.action}>
          <h2 className={cn('heading-primary', styles['action-heading'])}>
            Actions speak louder than words
          </h2>
          <div className={styles['action-list']}>
            <p>Change requires actions. This what we do:</p>
            <ul>
              <li>
                <b>WE’RE FUNDING OPEN SOURCE</b>
                <br/>
                  – DevX Conf is a non-profit event. Every surplus and $500 for each Gold Sponsor will be donated. 
                <br/>
                  – For every registration to our discord channel we’ll donate $1 to open-source projects we depend upon. 
              </li>
              <li>
              Sharing our experiences with funding open-source projects and insights for maintainers whom wish to become financially independent.
              </li>
              <li>
              Encouraging people, companies and conferences to secure their supply chain and acting as a role model for further generations.
              </li>
              <li>
                Do you have more ideas on how funding can foster a diverse community? →{' '}
                <a href="mailto:contact@devxconf.org">Please get in contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="row">
        <div className={styles.action}>
          <div className={styles['action-list']}>
            <h2>Do you want to join in on our journey of funding open source?</h2>
            <p>Here is want you can do:</p>
            <ol>
              <li>
                Generate the bill of materials in your commerical software.
              </li>
              <li>
                Identify whom your unpaid vendors are.
              </li>
              <li>
                Mitigate your supply chain risks by funding open-source maintainers.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Section>

    <Section className={styles.section}>
      <div className="row">
        <div className="wrapper-small">
          <div className={styles.features}>
            <div>
              <h2 className="heading-quadrary">Shape the future you want to live in</h2>
              <p>
                When Heartbleed was discovered, OpenSSL was maintained by a handful of volunteers and only one of whom worked full-time. The security flaw caused billions of dollars of economic damage yet at the time yearly support to the OpenSSL project only US$2,000.
              </p>
              <p>
                Much has changed since the 1st of Feburary 2012  and the infrastructure to financially support open-source maintainers now exists thanks to the efforts of OpenCollective and GitHub Sponsors.
              </p>
              <p>
                It is important that we all do our part in funding maintainers as it is importance that maintainers achieve income diversity as that enables roadmap and project independence.
              </p>
              <p>
                There are less than 2100 people in the inner GitHub maintainer community. What would the future look like if they empowered to become independent artists?
              </p>
              <p>
                If one of those people can help more people better understand a technology or improve the developer experience for an entire ecosystem what is the worth/value of that and why aren’t we doing that yet?
              </p>
            </div>
          </div>
        </div>
      </div>
      <PatternHalfCircle
        isInverted={true}
        styles={{
          position: 'absolute',
          right: '-15px',

          height: '400px'
        }}
      />
    </Section>

    <Section className={styles.section}>
      <div className="row">
        <div className="wrapper-small">
          <div className={styles.features}>
            <div>
              <h2 className="heading-quadrary">Recommended books</h2>
              <p>
                Nadia Eghbal in 2016 with the support of the Ford Foundation authored an extensive report into the unseen labor behind our digital infrastructure.
              </p>
              <p>
                Eghbal outlines, digital infrastructure should be treated as a necessary public good. Free public source code makes it exponentially cheaper and easier for companies to build software, and makes technology more accessible across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>


  </Layout>
);

export default Diversity;
