import { Stage } from '@lib/types';
import { speakers } from 'contents';

export const allStages: Stage[] = [
  {
    name: 'Stage A',
    day: 'Wednesday, April 28',
    discord: '',
    slug: 'a',
    stream: '',
    schedule: [
      {
        title: 'Example',
        description: 'Test',
        start: '9:00AM',
        end: '9:30AM',
        speaker: speakers[0]
      },
      {
        title: 'Example',
        description: 'Test',
        start: '9:30AM',
        end: '10:00AM',
        speaker: speakers[1]
      },
      {
        title: 'Example',
        description: 'Test',
        start: '10:00AM',
        end: '10:30AM',
        speaker: speakers[0]
      },
      {
        title: 'Example',
        description: 'Test',
        start: '9:00AM',
        end: '9:30AM',
        speaker: speakers[0]
      }, 
    ]
  },
  {
    name: 'Stage B',
    day: 'Thursday, April 29',
    discord: '',
    slug: 'b',
    stream: '',
    schedule: [
      {
        title: 'Example',
        description: 'Test',
        start: '9:00AM',
        end: '9:30AM',
        speaker: speakers[0]
      },
      {
        title: 'Example',
        description: 'Test',
        start: '9:30AM',
        end: '10:00AM',
        speaker: speakers[1]
      },
      {
        title: 'Example',
        description: 'Test',
        start: '10:00AM',
        end: '10:30AM',
        speaker: speakers[0]
      }
    ]
  },
];
