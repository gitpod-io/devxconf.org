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
            name: 'Johannes',
            company: '',
            title: '',
            image: {
              url: 'johannes.jpeg'
            },
            bio: '',
            twitter: '',
            linkedin: '',
            github: '',
            abstract: ''
          },
          {
            name: 'Christin',
            company: '',
            title: '',
            image: {
              url: 'christin.jpeg'
            },
            bio: '',
            twitter: '',
            linkedin: '',
            github: '',
            abstract: ''
          }
        ],
        isLinkLess: true
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
      },
      {
        title: 'Monorepos, are they right for you?',
        description: '',
        start: isEurope() ? '18:20' : '9:20 AM',
        end: isEurope() ? '18:40' : '9:40 AM',
        speaker: getSpeakerByName('Maël Nison')
      },
      {
        title: 'Fireside Chat',
        description: '',
        start: isEurope() ? '18:40' : '9:40 AM',
        end: isEurope() ? '19:00' : '10:00 AM',
        speaker: getSpeakerByName('Jason Warner')
      },
      {
        title: 'Cloud Native Java',
        description: '',
        start: isEurope() ? '19:00' : '10:00 AM',
        end: isEurope() ? '19:20' : '10:20 AM',
        speaker: getSpeakerByName('Josh Long')
      },
      {
        title: 'Why I love incremental delivery and why you should too',
        description: '',
        start: isEurope() ? '19:20' : '10:20 AM',
        end: isEurope() ? '19:40' : '10:40 AM',
        speaker: getSpeakerByName('Lili Kastilio')
      },
      {
        title: 'TBD',
        description: '',
        start: isEurope() ? '19:40' : '10:40 AM',
        end: isEurope() ? '20:00' : '11:00 AM',
        speaker: getSpeakerByName('Yevgeny Pats')
      },
      {
        title: 'Find friction in your developer experience by user testing with developers.',
        description: '',
        start: isEurope() ? '20:00' : '11:00 AM',
        end: isEurope() ? '20:20' : '11:20 AM',
        speaker: getSpeakerByName('Ian Jennings')
      },
      {
        title: 'Gitpod',
        description: '',
        start: isEurope() ? '20:20' : '11:20 AM',
        end: isEurope() ? '20:40' : '11:40 AM',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [getSpeakerByName('Mike Nikles'), getSpeakerByName('Anton Kosyakov')]
      },
      {
        title: 'The Developer Experience Gap',
        description: '',
        start: isEurope() ? '20:40' : '11:40 AM',
        end: isEurope() ? '21:00' : '12:00 PM',
        speaker: getSpeakerByName("Stephen O'Grady")
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
