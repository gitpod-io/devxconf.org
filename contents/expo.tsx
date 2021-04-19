import { Sponsor } from '@lib/types';

export const sponsors: Sponsor[] = [
  {
    name: 'CodeSee',
    description:
      ['CodeSee shows you how your code works. CodeSee helps developers to deeply understand how your large-scale codebase works, document it, and collaborate continuously.'],
    discord: 'https://discord.gg/UGZWNHeznV',
    website: 'https://gitlab.com',
    youtubeSlug: '',
    tier: 'gold',
    logo: {
      url: '/sponsors/codesee.svg'
    },
  },
  {
    name: 'Sourcegraph',
    description:
      ["Sourcegraph Universal Code Search enables developers to traverse the complex universe of interdependent codebases to find the code and information they need to do their jobs in today’s collaborative, multi-dimensional development environment.", "It's a single, scalable way to explore, navigate, and analyze all of your code regardless of system, repository, or language. Sourcegraph’s customers include many of the world’s leading companies, such as Amazon, PayPal, Uber, Lyft, Yelp, Atlassian, and Indeed."],
    discord: 'https://discord.gg/EGTMfgQGGh',
    links: [{ text: 'About', url: 'https://about.sourcegraph.com/customers '}],
    website: 'https://about.sourcegraph.com/',
    youtubeSlug: '',
    tier: 'silver',
    logo: {
      url: '/sponsors/sourcegraph.svg'
    },
  },
  {
    name: 'Slim.ai',
    description:
      ['TBD'],
    discord: 'https://discord.gg/U3QvSZXyk3',
    website: 'https://www.slim.ai',
    youtubeSlug: '',
    tier: 'silver',
    logo: {
      url: '/sponsors/slim-ai.svg'
    },
  },
  {
    name: 'Raycast',
    description:
      ["Modern teams rely on countless tools and their developers experience the pain of non-stop context switching. Raycast pairs the search functionality of macOS Spotlight with deep integrations of third party services.", "Without leaving the application, developers can create an issue in Jira, review pull requests in GitHub, or join a Zoom call. Scripts and an upcoming API allow automating tedious workflows. It's time to bring back clarity to our daily work."],
    discord: 'https://discord.gg/wrgjfPpXV6',
    website: 'https://gitlab.com',
    youtubeSlug: 'sU8WMWXXgtU',
    tier: 'silver',
    logo: {
      url: '/sponsors/raycast.svg'
    },
  },
  {
    name: 'Useoptic',
    description:
      ["Optic is an open-source project that makes documenting your APIs easy for any team. It observes development and test traffic to learn your API's behavior, detects API changes before they go live, and adds an API changelogs to every Pull Request. It's built for busy teams that want to move fast, avoid breaking things, and get the benefits of API specifications without having to write them by hand."],
    discord: 'https://discord.gg/QpcR5RdQs6',
    links: [{ text: 'GitHub Repo', url: 'https://github.com/opticdev/optic' }],
    website: 'https://useoptic.com/',
    youtubeSlug: '',
    tier: 'silver',
    logo: {
      url: '/sponsors/useoptic.svg'
    },
    image: '/expo/useoptic.png'
  },
  {
    name: 'CNCF',
    description:
      ['TBD'],
    discord: '',
    website: 'https://www.cncf.io',
    youtubeSlug: '',
    tier: 'start-up',
    logo: {
      url: '/sponsors/cnfc.svg'
    },
  },
  {
    name: 'Cloud Query',
    description:
      [' Cloudquery transforms cloud infrastructure into queryable SQL for easy monitoring, governance and security.'],
    discord: '',
    links: [{ text: 'GitHub Repo', url: '' }, { text: 'Contact Sales', url: '' }, { text: 'GitLab Enterprise', url: '' }],
    website: 'https://cloudquery.io',
    youtubeSlug: '',
    callToAction: 'Try Now',
    callToActionLink: '',
    tier: 'start-up',
    logo: {
      url: '/sponsors/cloudquery.svg'
    },
    image: 'cloudquery.png'
  },
  {
    name: 'Datadog',
    description:
      ['TBD'],
    discord: '',
    website: 'https://gitlab.com',
    youtubeSlug: '',
    callToAction: 'Try Now',
    callToActionLink: '',
    tier: 'start-up',
    logo: {
      url: ''
    },
  },
];
