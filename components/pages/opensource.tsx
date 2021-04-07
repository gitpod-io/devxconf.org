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
            <img src="/patterns/diversity-title-pattern.svg" aria-hidden={true} />
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
      <PatternHalfCircle
        isInverted={true}
        styles={{
          position: 'absolute',
          right: '-15px',

          height: '400px'
        }}
      />
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
                Having an equal speaker representation to acknowledge success, encourage others and
                acting as a role model for further generations
              </li>
              <li>
                We're donating $1 for every registrations to our discord channel to an organisation
                we support
              </li>
              <li>
                Thinking sustainable: instead of getting drowned in useless swag, all attendees can
                choose to donate their swag
              </li>
              <li>For each gold sponsor we’ll donate $500 to organisations we support</li>
              <li>
                All attendees need to agree to our values around DE&I before joining the event
              </li>
              <li>
                DevX Conf is a non-profit event. Every surplus will be donated to organizations we
                support
              </li>
              <li>
                Do you have more ideas on how we can foster a diverse community? →{' '}
                <a href="mailto:contact@devxconf.org">Please get in contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Support />
      <PatternHalfCircle
        className={styles.pattern}
        styles={{
          position: 'absolute',
          left: '-15px',
          height: '460px',
          marginTop: '50px'
        }}
      />
    </Section>
  </Layout>
);

export default Diversity;
