import Project from './project';
import React from 'react';
import Section from '@components/layout/section';
import { projects } from 'contents/opensource';
import styles from './vote.module.css';

const Vote = () => (
  <Section>
    <div className="row">
      <div className={styles.wrapper}>
        <h2 className="heading-secondary">Open-source Projects we supported last year</h2>
        <p>
          Last year the following opensource projects were supported with {' '}
          <span className={styles.imp}>USD $10,000</span>
          {' '} using <a href="https://wtfisqf.com/">Quadratic Funding</a> and the distribution of votes by the attendes. This year we are doing it again and thanks to support from <a href="https://devxconf.org/expo">our partners</a> the amount has increased to $22,600 USD 🦄{' '}
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
