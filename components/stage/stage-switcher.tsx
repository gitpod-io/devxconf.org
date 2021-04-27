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

 import { Stage } from '@lib/types';
 import { useState } from 'react';
import Select from '@components/select';
 
 type Props = {
   allStages: Stage[];
 };
 
 export default function ScheduleSwitcher({ allStages }: Props) {
   const [stage, setStage] = useState('a');
 
   const currentStage = allStages.find((s: Stage) => s.slug === stage);
 
   return (
     <div>
       <h3 className="heading-tertiary">Schedule</h3>
       <Select aria-label="Select a stage" value={stage} onChange={e => {
         setStage(e.target.value);
       }}>
         {allStages.map(stage => (
           <option key={stage.slug} value={stage.slug}>
             {stage.day}
           </option>
         ))}
       </Select>
     </div>
   );
 }
 