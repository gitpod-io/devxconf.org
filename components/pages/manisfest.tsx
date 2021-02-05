import { PatternCircle, PatternQuadrantTop } from '@components/patterns';

import Layout from '@components/layout';
import Section from '@components/layout/section';
import styles from './manifest.module.css';

const manifestations = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
];

const Manifest = () => (
  <Layout>
    <div className="row">
      <Section className={styles.section}>
        <h1 className="heading-primary">Manifest</h1>
        <div className={styles.manifestations}>
          {manifestations.map((m, i) => (
            <div key={i} className={styles.manifestation}>
              <PatternQuadrantTop 
                className={styles.icon} 
              />
              {m}
            </div>
          ))}
        </div>
        <PatternCircle
          styles={{
            margin: 'var(--gutter-large) 0'
          }}
        />
      </Section>
    </div>
  </Layout>
);

export default Manifest;
