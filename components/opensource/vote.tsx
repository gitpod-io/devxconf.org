import Project from './project';
import React from 'react';
import Section from '@components/layout/section';
import { projects } from 'contents/opensource';
import styles from './vote.module.css';

const Vote = () => (
  <Section>
    <div className="row">
      <div className={styles.wrapper}>
        <h2 className="heading-secondary">Vote for your favourite open-source project</h2>
        <p>
          And we’ll fund the winning project with a{' '}
          <span className={styles.imp}>$5k donation.</span>
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
