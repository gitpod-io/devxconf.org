/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Stage, Talk } from '@lib/types';

import Layout from './layout';
import { PatternHalfCircle } from '@components/patterns';
import TalkCard from './talk-card';
import cn from 'classnames';
import { isEurope } from 'utils/helpers';
import styles from './schedule.module.css';

function StageRow({ stage }: { stage: Stage }) {
  // Group talks by the time block
  let timeBlocks: any;

  if (undefined !== stage.schedule) {
    timeBlocks = stage.schedule.reduce((allBlocks: any, talk) => {
      allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
      return allBlocks;
    }, {});
  }
  return (
    <div key={stage.name} className={styles.row}>
      <h2 className={styles.day}>{stage.day}</h2>
      <div className={cn(styles.talks, styles[stage.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map((talk: Talk, index: number) => (
              <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allStages: Stage[];
};

export default function Schedule({ allStages }: Props) {
  let stagesToRender: Stage[] = []
  
  for (let i = 0; i < allStages.length - 2; i++) {
    console.log(allStages[i].schedule?.length, allStages[i + 2].schedule?.length)
    stagesToRender.push({
      ...allStages[i],
      // @ts-ignore
      schedule: allStages[i].schedule?.concat(allStages[i + 2].schedule).sort((a, b) => a.scheduleOrder - b.scheduleOrder)
    })
  }

  return (
    <Layout>
      <div className="row">
        <div className={styles.header}>
          <h1 className="heading-secondary">Schedule</h1>
          <p className={styles.intro}>
            The conference starts April 28th {isEurope() ? "17:00 CEST" : "8:00 PT"}. Local times shown below.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles['row-wrapper']}>
            {stagesToRender.map(stage => (
              <StageRow key={stage.slug} stage={stage} />
            ))}
          </div>
        </div>
      </div>
      <PatternHalfCircle
        isInverted={true}
        styles={{
          position: 'absolute',
          bottom: '0',
          right: '-15px',
          height: '300px'
        }}
        className={styles.pattern}
      />
    </Layout>
  );
}
