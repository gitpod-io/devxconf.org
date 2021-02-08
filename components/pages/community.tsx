import FollowUsOnTwitter from '@components/follow-us-on-twitter';
import Layout from '@components/layout';
import Section from '@components/layout/section';
import cn from 'classnames';
import styles from './community.module.css';

const Community = () => (
  <Layout>
    <div className="row">
      <Section className={styles.section}>
        <h1 className="heading-tertiary">Join us on Discord</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit
          amet.
        </p>
        <a href="#" className={cn('btn', styles.link)}>
          Go to <img src="/discord.svg" alt="Discord" />
        </a>
      </Section>
    </div>
    <FollowUsOnTwitter />
  </Layout>
);

export default Community;
