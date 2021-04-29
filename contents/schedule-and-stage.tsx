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
        scheduleOrder: 1,
        description: '',
        start: isEurope() ? '17:00' : '8:00 AM',
        end: isEurope() ? '17:10' : '8:10 AM',
        speaker: [
          {
            name: 'Johannes Landgraf',
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
            name: 'Christin Frohne',
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
        title: 'The evolution of DevX - An interview with Erich Gamma',
        scheduleOrder: 2,
        description: '',
        start: isEurope() ? '17:10' : '8:10 AM',
        end: isEurope() ? '17:40' : '8:40 AM',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [getSpeakerByName('Erich Gamma'), {
          name: 'Sven Efftinge',
            company: '',
            title: '',
            image: {
              url: 'sven-efftinge.jpeg'
            },
            bio: '',
            twitter: '',
            linkedin: '',
            github: '',
            abstract: ''
        }]
      },
      {
        title: "Is DevEx not good… because we don't want it to be?",
        scheduleOrder: 4,
        description: '',
        start: isEurope() ? '18:00' : '9:00 AM',
        end: isEurope() ? '18:20' : '9:20 AM',
        speaker: getSpeakerByName('Ellen Chisa')
      },
      {
        title: 'DevX at Heroku and GitHub - An interview with Jason Warner',
        scheduleOrder: 6,
        description: '',
        start: isEurope() ? '18:40' : '9:40 AM',
        end: isEurope() ? '19:00' : '10:00 AM',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [getSpeakerByName('Jason Warner'), {
          name: 'Johannes Landgraf',
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
        }]
      },
      {
        title: 'Internal DevX Experience is broken… and you should be pissed',
        scheduleOrder: 8,
        description: '',
        start: isEurope() ? '19:20' : '10:20 AM',
        end: isEurope() ? '19:40' : '10:40 AM',
        speaker: getSpeakerByName('Shanea Leven')
      },
      {
        title: 'Find friction in your developer experience by user testing with developers',
        scheduleOrder: 10,
        description: '',
        start: isEurope() ? '20:00' : '11:00 AM',
        end: isEurope() ? '20:20' : '11:20 AM',
        speaker: getSpeakerByName('Ian Jennings')
      },
      {
        title: 'The developer experience gap',
        scheduleOrder: 12,
        description: '',
        start: isEurope() ? '20:40' : '11:40 AM',
        end: isEurope() ? '21:00' : '12:00 PM',
        speaker: getSpeakerByName("Stephen O'Grady")
      },
    ]
  },

  {
    name: 'Stage A',
    day: 'Thursday, April 29',
    discord: '',
    slug: 'a',
    stream: '',
    schedule: [
      {
        title: "VSCode Power User Tips & Tricks",
        scheduleOrder: 14,
        description: '', 
        start: isEurope() ? '16:40' : '7:40 AM',
        end: isEurope() ? '17:00' : '8:00 AM',
        speaker: getSpeakerByName("Ahmad Awais")
      },
      {
        title: 'Streamlining Firebase Development with local Emulators',
        scheduleOrder: 16,
        description: '',
        start: isEurope() ? '17:20' : '8:20 AM',
        end: isEurope() ? '17:40' : '8:40 AM',
        speaker: getSpeakerByName("Rachel Myers"),
      },
      {
        title: "The story of GitHub1s - speed & familiarity matters",
        scheduleOrder: 18,
        description: '',
        start: isEurope() ? '18:00' : '9:00 AM',
        end: isEurope() ? '18:20' : '9:20 AM',
        speaker: getSpeakerByName('Yihong Cheng')
      },
      {
        title: 'Trapped in the open source supply chain',
        scheduleOrder: 20,
        description: '',
        start: isEurope() ? '18:40' : '9:40 AM',
        end: isEurope() ? '19:00' : '10:00 AM',
        speaker: getSpeakerByName('Henry Zhu')
      },
      {
        title: 'DevX in the Internet Age: One Step Forward, Two Steps Back',
        scheduleOrder: 22,
        description: '',
        start: isEurope() ? '19:20' : '10:20 AM',
        end: isEurope() ? '19:40' : '10:40 AM',
        speaker: getSpeakerByName('Anurag Goel')
      },
      {
        title: 'How to build a dApp',
        scheduleOrder: 24,
        description: '',
        start: isEurope() ? '20:00' : '11:00 AM',
        end: isEurope() ? '20:20' : '11:20 AM',
        speaker: getSpeakerByName('Nader Dabit')
      },
      {
        title: 'How to prioritize dev experience in the development process above all else',
        scheduleOrder: 26,
        description: '',
        start: isEurope() ? '20:40' : '11:40 AM',
        end: isEurope() ? '21:00' : '12:00 PM',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [getSpeakerByName("Tuomas Artman"), getSpeakerByName("Thomas Paul Mann")]
      },
    ]
  },
  {
    name: 'Stage B',
    day: 'Wednesday, April 28',
    discord: '',
    slug: 'b',
    stream: '',
    schedule: [
      {
        title: 'Using Observability to improve the Developer Experience',
        scheduleOrder: 3,
        description: '',
        start: isEurope() ? '17:40' : '8:40 AM',
        end: isEurope() ? '18:00' : '9:00 AM',
        speaker: getSpeakerByName('Borja Burgos')
      },
      {
        title: 'Monorepos, are they right for you?',
        scheduleOrder: 5,
        description: '',
        start: isEurope() ? '18:20' : '9:20 AM',
        end: isEurope() ? '18:40' : '9:40 AM',
        speaker: getSpeakerByName('Maël Nison')
      },
      {
        title: 'Cloud native Java',
        scheduleOrder: 7,
        description: '',
        start: isEurope() ? '19:00' : '10:00 AM',
        end: isEurope() ? '19:20' : '10:20 AM',
        speaker: getSpeakerByName('Josh Long')
      },
      {
        title: 'Infrastructure security, visibility and cost-optimization',
        scheduleOrder: 9,
        description: '',
        start: isEurope() ? '19:40' : '10:40 AM',
        end: isEurope() ? '20:00' : '11:00 AM',
        speaker: getSpeakerByName('Yevgeny Pats')
      },
      {
        title: 'Ephemeral Development Environments',
        scheduleOrder: 11,
        description: '',
        start: isEurope() ? '20:20' : '11:20 AM',
        end: isEurope() ? '20:40' : '11:40 AM',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [getSpeakerByName('Mike Nikles'), getSpeakerByName('Anton Kosyakov')]
      },
      {
        title: 'Building a K8s Operator for a Distributed Database',
        scheduleOrder: 13,
        description: '',
        start: isEurope() ? '21:00' : '12:00 PM',
        end: isEurope() ? '21:20' : '12:20 PM',
        speaker: getSpeakerByName("Natalie Pistunovich")
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
        title: 'Building Supabase Storage. DevX, performance, security - choose three',
        scheduleOrder: 15,
        description: '',
        start: isEurope() ? '17:00' : '8:00 AM',
        end: isEurope() ? '17:20' : '8:20 AM',
        speaker: getSpeakerByName("Inian Parameshwaran"),
      },
      {
        title: 'DevX: history of code search',
        scheduleOrder: 17,
        description: '',
        start: isEurope() ? '17:40' : '8:40 AM',
        end: isEurope() ? '18:00' : '9:00 AM',
        speaker: getSpeakerByName('Beyang Liu')
      },
      {
        title: 'Why I love incremental delivery and why you should too',
        scheduleOrder: 19,
        description: '',
        start: isEurope() ? '18:20' : '9:20 AM',
        end: isEurope() ? '18:40' : '9:40 AM',
        speaker: getSpeakerByName('Lili Kastilio')
      },
      {
        title: 'Simplifying the journey of your containerized application from dev to production',
        scheduleOrder: 21,
        description: '',
        start: isEurope() ? '19:00' : '10:00 AM',
        end: isEurope() ? '19:20' : '10:20 AM',
        speaker: getSpeakerByName('Kyle Quest')
      },
      {
        title: 'Make your APIs developer-friendly',
        scheduleOrder: 23,
        description: '',
        start: isEurope() ? '19:40' : '10:40 AM',
        end: isEurope() ? '20:00' : '11:00 AM',
        speaker: getSpeakerByName('Aidan Cunniffe')
      },
      {
        title: '"Testing" in prod Isn\'t the only way: why observability needs structure',
        scheduleOrder: 25,
        description: '',
        start: isEurope() ? '20:20' : '11:20 AM',
        end: isEurope() ? '20:40' : '11:40 AM',
        speaker: getSpeakerByName('Jean Yang')
      },
    ]
  }
];
