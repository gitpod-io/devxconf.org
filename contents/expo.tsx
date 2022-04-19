import { Sponsor } from '@lib/types';


export const sponsors: Sponsor[] = [
  {
    name: 'Gitpod',
    description: ['Gitpod is an open-source developer platform for remote development. Accelerate your teams developer experience, remote collaboration and security - to ship new products faster and more securely.'],
    callToAction: 'Website',
    callToActionLink: 'https://www.gitpod.io/',
    links: [
      { text: 'Linkedin', url: 'https://www.linkedin.com/company/gitpod/' },
      { text: 'Twitter', url: 'https://twitter.com/gitpod' }
    ],
    youtubeSlug: '',
    tier: 'gold',
    logo: {
      url: '/sponsors/gitpod.svg'
    },
    image: '/expo/gitpod.png'
  },
  {
    name: 'WorkOS',
    description: ['WorkOS provides APIs to make applications enterprise-ready.'],
    callToAction: 'Website',
    callToActionLink: 'https://workos.com/',
    links: [
      { text: 'Linkedin', url: 'https://www.linkedin.com/company/workos-inc' },
      { text: 'Twitter', url: 'https://twitter.com/workos' }
    ],
    youtubeSlug: '',
    tier: 'gold',
    logo: {
      url: '/sponsors/workos.svg'
    },
    image: '/expo/workos.png'
  },
  {
    name: 'Swimm',
    logo: {
      url: '/sponsors/swimm.svg'
    },
    description: [
      'Swimm helps engineering teams sync with code by integrating Continuous Documentation into the development workflow, so that docs are always up to date.'
    ],
    callToAction: 'Website',
    callToActionLink: 'https://swimm.io/',
    links: [
      { text: 'Linkedin', url: 'https://www.linkedin.com/company/swimm-io/' },
      { text: 'Twitter', url: 'https://twitter.com/swimm_io' }
    ],
    youtubeSlug: '',
    tier: 'gold',
    image: '/expo/swimm.png'
  },
  {
    name: 'Okteto',
    description: ['Remote Development Environments that feel like your local machine.'],
    callToAction: 'Website',
    callToActionLink: 'https://www.okteto.com/',
    links: [
      { text: 'Linkedin', url: 'https://www.linkedin.com/company/okteto' },
      { text: 'Twitter', url: 'https://twitter.com/oktetohq' }
    ],
    youtubeSlug: '',
    tier: 'gold',
    logo: {
      url: '/sponsors/okteto.svg'
    },
    image: '/expo/okteto.png'
  },
  {
    name: 'Tailscale',
    description: ['Tailscale is a zero-config VPN that makes devices and applications accessible anywhere in the world, securely and effortlessly.'],
    callToAction: 'Website',
    callToActionLink: 'https://www.tailscale.com',
    links: [
      { text: 'Linkedin', url: 'https://www.linkedin.com/company/tailscale' },
      { text: 'Twitter', url: 'https://twitter.com/tailscale' }
    ],
    youtubeSlug: '',
    tier: 'gold',
    logo: {
      url: '/sponsors/tailscale.svg'
    },
    image: '/expo/tailscale.png'
  },
  {
    name: 'Slim.ai',
    description:
      ['Slim.AI is a developer efficiency platform for cloud-native applications and containerized workflows. The Slim Developer Platform provides automated optimization, workflow management, and analytic tooling for containerized apps, improving velocity, security, and performance. We help devs focus less on infrastructure and more on writing great code.'],
    callToAction: 'Website',
    callToActionLink: 'https://www.slim.ai',
    links: [
      { text: 'Linkedin', url: 'https://www.linkedin.com/company/slim-ai-inc' },
      { text: 'Twitter', url: 'https://twitter.com/slimdevops' }
    ],
    youtubeSlug: '',
    tier: 'silver',
    logo: {
      url: '/sponsors/slim-ai.svg'
    },
    image: '/expo/slim-ai.png'
  },
  {
    name: 'CodeSee',
    description: [''],
    website: 'https://www.codesee.io/',
    youtubeSlug: '',
    tier: 'start-up',
    logo: {
      url: '/sponsors/codesee.svg'
    },
  }
];
