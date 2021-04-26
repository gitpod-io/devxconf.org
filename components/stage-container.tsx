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

 import { useEffect, useState } from 'react';

 import { DiscordLogo } from './pages/community';
 import EnterStage from './stage/enter-stage';
 import Link from 'next/link';
 import ScheduleSidebar from './schedule-sidebar';
 import { Stage } from '@lib/types';
 import { allStages } from 'contents/schedule-and-stage';
 import cn from 'classnames';
 import { getIsLoggedIn } from '../utils/helpers';
 import { hyphenate } from './speakers-grid';
 import styles from './stage-container.module.css';
 import useSWR from 'swr';
 import { useRouter } from 'next/router';
 
 type Props = {
   stage: Stage;
 };
 
 export default function StageContainer({ stage }: Props) {
   const [loggedIn, setIsLoggedIn] = useState(false);
   const slug = useRouter().query.slug;
 
   useEffect(() => {
     setIsLoggedIn(!!getIsLoggedIn());
   });
 
   const response = useSWR('/api/stages', {
     initialData: allStages,
     refreshInterval: 5000
   });
 
   const updatedStages = response.data || [];
   const updatedStage = updatedStages.find((s: Stage) => s.slug === slug) || stage;
 
   return (
     <div className={cn('row', styles.row)}>
       <div className={styles.container}>
         <div className={styles.streamContainer}>
           {!loggedIn ? (
             <EnterStage setLoggedIn={setIsLoggedIn} />
           ) : (
             <div className={styles.stream}>
               <div className={styles.yt}>
                 <iframe
                   src={`https://www.youtube.com/embed/${updatedStage.stream}?autoplay=1`}
                   title="YouTube video player"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                 ></iframe>
               </div>
               <div className={styles.bottom}>
                 <div className={styles.messageContainer}>
                   <h2 className="heading-tertiary">{updatedStage.name}</h2>
                   {updatedStage.description ? <p>{updatedStage.description}</p> : null}
                 </div>
                 <div className={styles['btn-container']}>
                   <a
                     target="_blank"
                     href="https://discord.gg/JP9bWxNbwS"
                     rel="noopener noreferrer"
                     className={cn('btn btn--big', styles['chat-button'])}
                   >
                     Join Live Chat <DiscordLogo />
                   </a>
                   {updatedStage.speaker ? (
                     <Link href={`/speakers/${hyphenate(updatedStage.speaker)}`}>
                       <a className="btn btn--secondary">See Speaker Profile</a>
                     </Link>
                   ) : null}
                 </div>
               </div>
             </div>
           )}
         </div>
         <ScheduleSidebar allStages={allStages} />
       </div>
     </div>
   );
 }
 
 
 