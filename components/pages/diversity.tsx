import Layout from '@components/layout';
import { PatternHalfCircle } from '@components/patterns';
import Section from '@components/layout/section';
import Support from '@components/diversity/support';
import cn from 'classnames';
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
            DevX is built around values for a more diverse, inclusive and understanding tech
            community. A better place for all.
          </p>
        </div>
      </div>
      <PatternHalfCircle
        className={styles.pattern}
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
                We need to take diversity as our strength and create a community where everyone
                feels included and valued. We strive to build and nurture a culture where
                inclusiveness is a matter of course, not a choice.
              </p>
              <p>
                We celebrate that every person brings a unique perspective and experience to the
                community. Together we want to establish a welcoming conference, where everyone
                feels heard, valued and empowered.
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
                <a href="mailto:contact@devxconf.org">Please reach out</a>
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
