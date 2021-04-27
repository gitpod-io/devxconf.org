import Project from './project';
import React from 'react';
import Section from '@components/layout/section';
import { projects } from 'contents/opensource';
import styles from './vote.module.css';

const Vote = () => (
  <Section>
    <div className="row">
      <div className={styles.wrapper}>
        <h2 className="heading-secondary">Vote for your favourite open-source projects</h2>
        <p>
          And we’ll distribute {' '}
          <span className={styles.imp}>USD $10,000</span>
          {' '} between the projects using <a href="https://wtfisqf.com/">Quadratic Funding</a> and the distribution of votes. 🦄{' '}
        </p>
      </div>
      <div className={styles.projects}>
        {
          projects.map(project => <Project 
            {...project}
            key={project.title}
          />)
        }
      </div>
    </div>
  </Section>
);

export default Vote;
