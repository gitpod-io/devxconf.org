import BackLink from '@components/backlink';
import Layout from '@components/layout';
import { PatternCircle } from '@components/patterns';
import Section from '@components/layout/section';
import cn from 'classnames';
import styles from './manifest.module.css';

const Manifest = () => (
  <Layout>
    <div className="row">
      <div className="wrapper-small">
        <Section className={styles.section}>
          <PatternCircle
            styles={{
              position: 'absolute',
              height: 300,
              top: '-2%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
          <div className={styles.content}>
            <h1 className="heading-secondary">Bring back joy and speed to our workflows. </h1>
            <p>
              DevX Conf is about developer experience - our daily experience when trying to get the
              job done. We write code within specific languages/ frameworks, use tools, glue them
              together to (tool) chains, develop against APIs and communicate and collaborate with
              our colleagues. All of that should be efficient, sustainable and joyful - and
              currently it is not.{' '}
            </p>
            <p>
              The myriad of tools that are released each single day initially sounded like the
              promised developer-land. While choice is great, it doesn't necessarily make our lives
              easier. How that feels? This pure gold{' '}
              <a href="#" target="_blank">
                CNCF landscape meme
              </a>{' '}
              is worth more than a thousand of words. Our friends at{' '}
              <a href="#" target="_blank">
                Redmonk
              </a>{' '}
              gave it a name - developer experience gap and brought it home with their definition:
            </p>
            <blockquote className={styles.quote}>
              <p>
                [..] developers are forced to borrow time from writing code and redirect it towards
                managing the issues associated with highly complex, multi-factor developer
                toolchains held together in places by duct tape and baling wire.
              </p>
              <div>“The Developer Experience Gap” by Stephen O'Grady, Redmonk</div>
            </blockquote>
            <p>
              However, there is light at the end of the tunnel as individual developers, teams and
              projects start to think deeply about design, style and taste for tools to help us get
              into a flow focused on what we all love most: being creative and writing elegant code.
              What all of them have in common is the desire to delight, the desire to reduce
              friction and the desire to leverage automation to solve problems and turn duct tape
              into a Swiss clockwork that works reliably below the surface. This community and
              conference is for them.
            </p>
            <p>
              With DevX Conf we want to create a space for creators where we can start from first
              principles, collaborate, listen, discuss and declutter our workflows, toolchains and
              minds to make developers feel like everything is at their fingertips. The goal is to
              foster an ecosystem that sparks dialogue and establishes best practices and frameworks
              across four different areas.
            </p>
          </div>
        </Section>

        <Section className={styles.topics}>
          <div className={styles['topic-title-container']}>
            <h2 className={cn('heading-secondary', styles['topic-title'])}>Topics</h2>
          </div>
          <div className={styles['topic-container']}>
            <div className={styles.topic}>
              <h4 className="heading-quadrary">Develop</h4>
              <ul className={styles.ul}>
                <li>Editors</li>
                <li>Remote Dev Environments</li>
                <li>Ephemeral Dev Environments</li>
                <li>Language Stack / Ecosystem</li>
                <li>Microservice development</li>
                <li>Effective API Design Principles</li>
                <li>Programming Languages & Productivity</li>
              </ul>
            </div>
            <div className={styles.topic}>
              <h4 className="heading-quadrary">Build, Text & Deploy</h4>
              <ul className={styles.ul}>
                <li>CI Pipeline vs Build System</li>
                <li>Distributed Caching & Build</li>
                <li>Reproducible builds</li>
                <li>Pipeline Abstraction</li>
                <li>Death to .yml, Gluecode</li>
                <li>Config vs Code </li>
              </ul>
            </div>
            <div className={styles.topic}>
              <h4 className="heading-quadrary">Collaborate</h4>
              <ul className={styles.ul}>
                <li>Remote work</li>
                <li>Pair Programming & Mentoring</li>
                <li>Keep in sync with your team</li>
                <li>GitOps</li>
              </ul>
            </div>
            <div className={styles.topic}>
              <h4 className="heading-quadrary">Run</h4>
              <ul className={styles.ul}>
                <li>Instant continuous deploys</li>
                <li>Serverless</li>
                <li>Monolith vs Distributed</li>
              </ul>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: 'var(--gutter-huge)'}}>
            <BackLink href="/" destinationText="Overview"/>
          </div>
        </Section>
      </div>
    </div>
  </Layout>
);

export default Manifest;
