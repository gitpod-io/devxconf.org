import Layout from '@components/layout';
import { PatternCircle } from '@components/patterns';
import Section from '@components/layout/section';
import styles from './diversity.module.css'

const Diversity = () => (
  <Layout>
    <div className="row">
    <Section className={styles.section}>
      <div className={styles.header}>
        <div className={styles["title-container"]}>
            <img src="/patterns/diversity-title-pattern.png" aria-hidden={true}/>
            <h1 className="heading-primary">Diversity, Equity & Inclusion</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
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

export default Diversity;
