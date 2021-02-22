import BackLink from '@components/backlink';
import Layout from '@components/layout';
import { PatternHalfCircle } from '@components/patterns';
import Section from '@components/layout/section';
import cn from 'classnames';
import { organizationsWeSupport } from 'contents/diversity';
import styles from './diversity.module.css';

const Diversity = () => (
  <Layout>
    <Section className={styles.section}>
      <div className="row">
        <div className={cn(styles.header, 'wrapper-small')}>
          <div className={styles['intro-container']}>
            <img src="/patterns/diversity-title-pattern.svg" aria-hidden={true} />
            <h1 className="heading-secondary">
              Diversity,
              <br />
              Equity &<br /> Inclusion
            </h1>
          </div>
          <p>
            These values are essential for us at DevX Conf. We want to build a more diverse,
            inclusive and understanding tech community. A better place for all.
          </p>
        </div>
      </div>
      <PatternHalfCircle
        isInverted={true}
        styles={{
          position: 'absolute',
          right: '-15px',
          height: '500px',
          marginTop: '-100px'
        }}
      />
      <div className="row">
        <div className="wrapper-small">
          <div className={styles.features}>
            <div>
              <h2 className="heading-quadrary">Diversity drives us</h2>
              <p>
                To change the world for the better, we need to take diversity as our strength. To
                feel part of a team and be engaged, you must feel included and valued. That's why we
                strive to build and nurture a culture where inclusiveness is a matter of course, not
                a choice.{' '}
              </p>
              <p>
                We celebrate that every person brings a unique perspective and experience to the
                community. Together we want to establish a welcoming conference, where everyone
                feels heard, valued and empowered.{' '}
              </p>
            </div>
            <div>
              <h2 className="heading-quadrary">Good times Enlights Us</h2>
              <p>
                DevX Conf is a platform to exchange knowledge, to encourage each other and to build
                connections. We want to fosters professional and personal growth while advancing and
                educating the field of developer experience.
              </p>
              <p>
                We want to have a great time, share laughters and move forward to more open-minded
                and curious world.
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
              <li>Each gold sponsor financed a scholarship for xyz</li>
              <li>
                Our values around DE&I are part of our code of conduct that every sponsor and
                attendee needs approve before joining the event
              </li>
              <li>
                Do you have more ideas on how we can foster a diverse community? →{' '}
                <a href="#">Please reach out</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.support}>
          <div className={styles['support-item']}>
            <h3>Organisations we support:</h3>
            <ul>
              {organizationsWeSupport.map(org => (
                <li>
                  <a href={`https://twitter.com/${org}`} target="_blank" key={org} className="heading-quadrary">
                    @{org}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['support-item']}>
            <h3>There is still a lot to do</h3>
            <p>
              We're not, where we'd like to be. So we have to keep fighting for your values. For
              that we started a donation initative.
            </p>
            <p>
              For every registration to our discord channel we'll donate $1 to a non-profit
              organisation that we support. Would you like to join us?
            </p>
            <a href="#" className={cn('btn btn--secondary', styles['donate-btn'])}>
              Donate Now
            </a>
          </div>
        </div>
      </div>
      <PatternHalfCircle
        styles={{
          position: 'absolute',
          left: '-15px',
          height: '460px',
          marginTop: '50px'
        }}
      />
      <div style={{ textAlign: 'center', marginTop: 'calc(2 * var(--gutter-huge))' }}>
        <BackLink href="/" destinationText="Overview" />
      </div>
    </Section>
  </Layout>
);

export default Diversity;
