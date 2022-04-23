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

// eslint-disable-next-line
// @ts-nocheck

import { Stage } from '@lib/types';

import Layout from './layout';
import { PatternHalfCircle } from '@components/patterns';
import TalkCard from './talk-card';
import cn from 'classnames';
import styles from './schedule.module.css';

const StageSection = ({title, stage}: {title: string; stage: Stage}) => (
  <div>
    <h3 className={styles["stage-name"]}>{title}</h3>
      <div className={cn(styles.talks, styles[stage.slug])}>
        {stage.schedule?.map(talk => (
          <div>
            <TalkCard key={talk.title} talk={talk} showTime={true} />
          </div>
        ))}
      </div>
  </div>
)

function StageRow({ stages }: { stage: Stage[] }) {
  return (
    <div key={stages[0].name} className={styles.row}>
      <h2 className={styles.day}>{stages[0].day}</h2>
      {stages.map((stage: Stage) => <StageSection title={stage.name} stage={stage} />)}
    </div>
  );
}

type Props = {
  intro: JSX.Element | string;
  allStages: Stage[];
};

export default function Schedule({ intro, allStages }: Props) {
  const stagesToRender: Stage[] = [];

  for (let i = 0; i < allStages.length - 2; i++) {
    stagesToRender.push({
      ...allStages[i],
      schedule: allStages[i].schedule
        // eslint-disable-next-line
        // @ts-ignore
        ?.concat(allStages[i + 2].schedule)
        .sort((a, b) => a.scheduleOrder - b.scheduleOrder)
    });
  }

  const sortedStages = allStages.sort((a, b) => {
    const dayA = a.day.split(",")[1]
    const dayB = b.day.split(",")[1]
    if (dayA > dayB) {
      return 1;
    }
    if (dayA < dayB) {
      return -1;
    }
    return 0;
  });

  return (
    <Layout>
      <div className="row">
        <div className={styles.header}>
          <h1 className="heading-secondary">Schedule</h1>
          <p className={styles.intro}>{intro}</p>
        </div>
        <div className={styles.container}>
          <div className={styles['row-wrapper']}>
            <StageRow stages={[sortedStages[0], sortedStages[1]]} />
            <StageRow stages={[sortedStages[2], sortedStages[3]]} />
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
