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

import Select from './select';
import { Stage } from '@lib/types';
import TalkCard from './talk-card';
import styles from './schedule-sidebar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Props = {
  allStages: Stage[];
};

export default function ScheduleSidebar({ allStages }: Props) {
  const router = useRouter();
  const [stage, setStage] = useState(router.query.slug);
  const currentStage = allStages.find((s: Stage) => s.slug === stage);
  const [day, setDay] = useState("Thursday, April 29");  
  const currentStageDaysSchedules = allStages.filter((s: Stage) => s.slug === stage) || [];
  const uniqueDayStrings = currentStageDaysSchedules.map((s: Stage) => s.day)


  useEffect(() => {
    setStage(router.query.slug)
  }, [router.query.slug])

  return (
    <div className={styles.schedule}>
      <h3 className="heading-tertiary">Stage</h3>
      <Select aria-label="Select a Stage" value={stage}
        onChange={(e: any) => {
          const slug = e.target.value;
          setStage(slug)
          router.push(`/stage/${slug}`)
        }}
        isGrey={true}
      >
        {[allStages[0], allStages[2]].map(stage => (
          <option key={stage.slug} value={stage.slug}>
            {stage.name}
          </option>
        ))}
      </Select>

      <h3 className="heading-tertiary">Schedule</h3>
      <Select aria-label="Select a day" value={day} onChange={(e: any) => {
        setDay(e.target.value);
      }}>
        {uniqueDayStrings.map((day, i) => (
          <option key={i} value={day}>
            {day}
          </option>
        ))}
      </Select>
      <div className={styles.talks}>
        {undefined !== currentStageDaysSchedules
          ? currentStageDaysSchedules.find((s: Stage) => s.day === day)?.schedule?.map(talk => <TalkCard key={talk.title} talk={talk} showTime />)
          : null}
      </div>
    </div>
  );
}
