import Layout from '@components/layout';
import { PatternCircle } from '@components/patterns';
import Section from '@components/layout/section';
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
            top: '-5%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
        <div className={styles.content}>
          <h1 className="heading-tertiary">Bring back joy and speed to our workflows. </h1>
          <p>
            DevX Conf is about developer experience - our daily experience when trying to get the
            job done. We write code within specific languages/ frameworks, use tools, glue them
            together to (tool) chains, develop against APIs and communicate and collaborate with our
            colleagues. All of that should be efficient, sustainable and joyful - and currently it
            is not.{' '}
          </p>
          <p>
            The myriad of tools that are released each single day initially sounded like the
            promised developer-land. While choice is great, it doesn't necessarily make our lives
            easier. How that feels? This pure gold <a href="#" target="_blank">CNCF landscape meme</a> is worth more than a thousand
            of words. Our friends at <a href="#" target="_blank">Redmonk</a> gave it a name - developer experience gap and brought
            it home with their definition:
          </p>
          <blockquote>
            <p>
              [..] developers are forced to borrow time from writing code and redirect it towards
              managing the issues associated with highly complex, multi-factor developer toolchains
              held together in places by duct tape and baling wire.
            </p>
            <p>“The Developer Experience Gap” by Stephen O'Grady, Redmonk</p>
          </blockquote>
          <p>
            However, there is light at the end of the tunnel as individual developers, teams and
            projects start to think deeply about design, style and taste for tools to help us get
            into a flow focused on what we all love most: being creative and writing elegant code.
            What all of them have in common is the desire to delight, the desire to reduce friction
            and the desire to leverage automation to solve problems and turn duct tape into a Swiss
            clockwork that works reliably below the surface. This community and conference is for
            them.
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
        <h2>Topics</h2>
      </Section>
      </div>
    </div>
  </Layout>
);

export default Manifest;
