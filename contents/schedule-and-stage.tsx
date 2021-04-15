import { Stage } from '@lib/types';
import { isEurope } from 'utils/helpers';
import { speakers } from 'contents';

const getSpeakerByName = (name: string) =>
  speakers.find(s => s.name.toLowerCase() === name.toLowerCase());

export const allStages: Stage[] = [
  {
    name: 'Stage A',
    day: 'Wednesday, April 28',
    discord: '',
    slug: 'a',
    stream: '',
    schedule: [
      {
        title: 'Intro',
        description: '',
        start: isEurope() ? '17:00' : '8:00 AM',
        end: isEurope() ? '17:10' : '8:10 AM',
        speaker: [
          {
            name: 'Jason Warner',
            company: 'GitHub',
            title: 'CTO',
            image: {
              url: 'jason-warner.jpeg'
            },
            bio:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost',
            slug: 'max-mustermann',
            twitter: 'jasoncwarner',
            linkedin: '',
            github: '',
            keynote:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            name: 'Jason Warner',
            company: 'GitHub',
            title: 'CTO',
            image: {
              url: 'jason-warner.jpeg'
            },
            bio:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost',
            slug: 'max-mustermann',
            twitter: 'jasoncwarner',
            linkedin: '',
            github: '',
            keynote:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostLorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        ]
      },
      {
        title: 'Fireside Chat with Johannes',
        description: '',
        start: isEurope() ? '17:10' : '8:10 AM',
        end: isEurope() ? '17:40' : '8:40 AM',
        speaker: getSpeakerByName('Erich Gamma')
      },
      {
        title: 'Development Outage/ Treating your default branch as production',
        description: '',
        start: isEurope() ? '17:40' : '8:40 AM',
        end: isEurope() ? '18:00' : '9:00 AM',
        speaker: getSpeakerByName('Borja Burgos')
      },
      {
        title: "Is DevEx not good… because we don't want it to be?",
        description: '',
        start: isEurope() ? '18:00' : '9:00 AM',
        end: isEurope() ? '18:20' : '9:20 AM',
        speaker: getSpeakerByName('Ellen Chisa')
      }
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
        description: '',
        start: '9:00AM',
        end: '9:30AM',
        speaker: speakers[0]
      },
      {
        title: 'Example',
        description: '',
        start: '9:30AM',
        end: '10:00AM',
        speaker: speakers[1]
      },
      {
        title: 'Example',
        description: '',
        start: '10:00AM',
        end: '10:30AM',
        speaker: speakers[0]
      }
    ]
  }
];
