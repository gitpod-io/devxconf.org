import { Speaker } from '@lib/types';

export const speakers: Speaker[] = [
  {
    name: 'Shawn Wang',
    title: 'Head of DX',
    company: 'Temporal',
    image: {
      url: 'swyx.jpg'
    },
    bio:
      'swyx has worked on React and serverless JavaScript at Two Sigma, Netlify and AWS, and now serves as Head of Developer Experience at Temporal.io. He has started and run communities for hundreds of thousands of developers, like Svelte Society, /r/reactjs, and the React TypeScript Cheatsheet. His nontechnical writing was recently published in the Coding Career Handbook for Junior to Senior developers.',
    twitter: 'swyx',
    linkedin: 'shawnswyxwang',
    github: 'sw-yx',
    abstract: (
      <div>
        <p>
          <strong>The Radiating Circles of DevX</strong>
        </p>
        <p>
          building upon{' '}
          <a
            href="https://podcasts.apple.com/us/podcast/the-radiating-circles-in-devx-with-swyx-head/id1599104169?i=1000551158483"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://podcasts.apple.com/us/podcast/the-radiating-circles-in-devx-with-swyx-head/id1599104169?i=1000551158483
          </a>
          , this is the first time i'll ever do a talk giving the full mental model for building a
          cohesive developer experience from product to community!
        </p>
      </div>
    )
  },
  {
    name: 'Zeno Rocha',
    title: 'VP of Developer Experience',
    company: 'WorkOS',
    image: {
      url: 'zeno-rocha.png'
    },
    bio:
      "Zeno Rocha is a Brazilian creator and programmer. He currently lives in Los Angeles, California, where he's the VP of Developer Experience at WorkOS. His lifelong appreciation for building software and sharing knowledge led him to speak in over 110 conferences worldwide. His passion for open source put him on the top 20 most active users on GitHub at age 22. Before moving to the US, Zeno developed multiple applications, mentored startups, and worked at major companies in Latin America, such as Globo and Petrobras.",
    twitter: 'zenorocha',
    linkedin: 'zenorocha',
    github: 'zenorocha',
    abstract: (
      <div>
        <p>
          <strong>The Next Generation of Developer-First Products</strong>
        </p>
        <p>
          In this talk, we'll explore the different generations of developer-first products. We'll
          examine what's unique about them, and how you can prepare your product for the next
          generation.
        </p>
      </div>
    )
  },
  {
    name: 'Himanshu Mishra',
    title: 'Developer Advocate',
    company: 'spotify',
    image: {
      url: 'himanshu-mishra.png'
    },
    bio:
      'Himanshu is a Developer Advocate at Spotify working on backstage.io, previously an engineer and a core contributor to the project. He lives by "Happy Developers write happy code" and he loves advocating for Backstage and its impact on improving Developer Experience.',
    twitter: 'OrkoHunter',
    linkedin: 'OrkoHunter',
    github: 'OrkoHunter',
    abstract: (
      <div>
        <p>
          <strong>How Spotify engineers use Backstage daily and keep their lives simple</strong>
        </p>
        <p>
          You have a complex ecosystem of frameworks, technologies, and platforms. Each with their
          own portal or tooling surrounding it. To remove friction, your autonomous teams all have
          their own implementation. Onboarding new developers is super confusing, and docs are
          scattered around the place. In short: chaos.
        </p>
        <p>
          The solution to solving all this fragmentation might as well be.. another portal? Let's
          take a look at Backstage [
          <a href="https://backstage.io" target="_blank" rel="noreferrer noopener">
            https://backstage.io
          </a>
          ], an Open Source platform which you can use to build your own developer portal, is highly
          customisable and adopted by companies like Expedia, Netflix, American Airlines, and Epic
          Games. .
        </p>
        <p>
          Suzanne will share the story why Backstage was developed at Spotify, how it became the
          core of their Developer Experience, and eventually a CNCF project. You’ll get a tour of
          the Backstage platform, the plugin ecosystem, an understanding of the key use cases for
          Backstage and how Backstage might be a solution to control the chaos in your organisation.
        </p>
      </div>
    )
  },
  {
    name: 'Ramiro Berrelleza',
    company: 'Okteto',
    title: 'Founder and CEO',
    image: {
      url: 'ramiro-berrelleza.png'
    },
    bio:
      'Ramiro Berrelleza is one of the founders of Okteto. He has spent most of his career (and his free time) building cloud services and developer tools. Before starting Okteto, Ramiro was an Architect at Atlassian and a Software Engineer at Microsoft Azure. Originally from Mexico, he currently lives in the Bay Area.',
    twitter: 'rberrelleza',
    linkedin: 'ramiroberrelleza',
    github: 'rberrelleza',
    abstract: (
      <div>
        <p>
          Over the last five years, there has been a huge shift in the way applications get deployed
          - from self-hosted infrastructure to the world of cloud and Kubernetes clusters. This
          change in deployment practices brought with it a lot of new things to the world developers
          - containers, cloud provider configurations, staging environments, to name a few. Instead
          of coding monoliths, we started to see a shift towards cloud-native applications
          consisting of multiple microservices.
        </p>
        <p>
          So while the way of application deployment has advanced, the workflows and tooling for
          development have remained stagnant. They didn't adapt completely or feel "native" to this
          world of cloud-native applications. This led to an unpleasant developer experience
          involving a massive loss in developer productivity.
        </p>
        <p>
          This talk is going to be about how cloud based remote development environments provide a
          solution to this problem. A new development workflow solution that feels native to the
          multiple microservices-based applications we see being developed these days. The talk will
          cover what these environments are, how they deliver a more pleasant developer experience,
          and how folks can get started using them with the help of open source tools like Okteto
          CLI.
        </p>
      </div>
    )
  },
  {
    name: 'Arsh Sharma',
    company: 'VMware',
    title: 'Okteto',
    image: {
      url: 'arsh-sharma.jpeg'
    },
    bio:
      'Arsh is a Developer Experience Engineer at Okteto. He is active in the open-source community and has contributed to multiple CNCF projects, including Kubernetes, cert-manager, and Kyverno. He received the Kubernetes Contributor Award for his contributions to the project last year. He loves simplifying technical concepts through his blogs and is also fond of sharing his experiences at conferences.',
    twitter: 'rinkiyakedad',
    linkedin: 'arsh4',
    github: 'RinkiyaKeDad',
    abstract: (
      <div>
        <p>
          Over the last five years, there has been a huge shift in the way applications get deployed
          - from self-hosted infrastructure to the world of cloud and Kubernetes clusters. This
          change in deployment practices brought with it a lot of new things to the world developers
          - containers, cloud provider configurations, staging environments, to name a few. Instead
          of coding monoliths, we started to see a shift towards cloud-native applications
          consisting of multiple microservices.
        </p>
        <p>
          So while the way of application deployment has advanced, the workflows and tooling for
          development have remained stagnant. They didn't adapt completely or feel "native" to this
          world of cloud-native applications. This led to an unpleasant developer experience
          involving a massive loss in developer productivity.
        </p>
        <p>
          This talk is going to be about how cloud based remote development environments provide a
          solution to this problem. A new development workflow solution that feels native to the
          multiple microservices-based applications we see being developed these days. The talk will
          cover what these environments are, how they deliver a more pleasant developer experience,
          and how folks can get started using them with the help of open source tools like Okteto
          CLI.
        </p>
      </div>
    )
  },
  {
    name: 'Ana Hevesi',
    title: 'DevX and Open Source Community Strategist',
    image: {
      url: 'ana-hevesi.jpg'
    },
    bio:
      'Ana Hevesi provides DX research services to inform DevRel and product strategy as an independent consultant. Previously, Ana shipped platform updates to ease tensions between Stack Overflow users, launched the first Node.js hosting platform, helped the Filecoin team prepare for outside contributors, and conducted user research at MongoDB. ',
    twitter: 'anthrocypher',
    linkedin: 'ananoemi',
    abstract: (
      <div>
        <p>
          <strong>"Community: Your distributed debugging machine"</strong>
        </p>
        <div>
          When we try to get other developers to adopt our projects, we’re asking them to take on a
          new learning curve. A large success factor is whether they have access to peer developers
          who can help them debug when they get stuck. This is the difference between developers
          associating your tool with a growing sense of personal mastery, or the isolation,
          frustration, and discouragement that leads them to put their efforts elsewhere. Together,
          we'll dive into why a peer learning network is the stickiness factor to your developer
          experience, anecdotes from successful peer learning communities, and how to lay the
          groundwork for your own.
        </div>
      </div>
    )
  },
  {
    name: 'Amara Graham',
    company: 'Camunda',
    title: 'Head of Developer Experience',
    image: {
      url: 'amara-graham.jpg'
    },
    bio:
      'Amara is the Head of Developer Experience at Camunda. Before her step into developer relations, she was an enterprise web application developer focusing on line of business applications and assisting developers across various teams on implementing proprietary and open source solutions. She’s passionate about UX, technical communities (both online and offline) and excited to see where advances in AI take us. In her spare time, she experiments in the kitchen and plays video games.',
    twitter: 'missamarakay',
    linkedin: 'amara-graham',
    github: 'akeller',
    abstract: (
      <div>
        <p>
          <strong>
            Developer Experience and Product-Led Growth (PLG) - how they enable each other and your
            developer community, seamlessly.
          </strong>
        </p>
        <p>
          Developer Experience has become a really hot topic recently, possibly due to less
          traveling in DevRel but also with a shift to strategies like Product-Led Growth (PLG). We
          see internally DX teams too - supporting internal tooling to increase productivity and
          efficiency around the organization or company.
        </p>
        <p>
          Rather than seeing this shift as a hard company pivot, DX and PLG are really well suited
          to coexist and lead an organization - educating teams on identifying trends and patterns
          in community and customer feedback, turning that feedback into action, and measuring
          success.
        </p>
        <p>
          While you don't have to formally do PLG at a company to see value in DX, understanding how
          to speak through PLG and DX will ultimately make the value of a DX team or program even
          greater. I'll share my thoughts on what we are doing a Camunda, including DevRel and DX,
          and how we work together internally to support our external developer community with PLG.
        </p>
      </div>
    )
  },
  {
    name: 'Layla Porter',
    company: 'VMware',
    title: '.NET Developer Advocate',
    image: {
      url: 'layla-porter.jpg'
    },
    bio:
      'Layla is a Developer Advocate at VMware serving the .NET community. She is a Live Coder on Twitch, a Microsoft MVP, a GitHub Star, and the founder of the #WomenOfDotNet Initiative. Layla loves sharing knowledge whilst having fun. No question is stupid and beginners are always welcome.',
    twitter: 'LaylaCodesIt',
    linkedin: 'layla-porter',
    github: 'Layla-p',
    abstract: (
      <div>
        <p>
          <strong>TDD and the Terminator - An introduction to Test Driven Development</strong>
        </p>
        <p>
          Getting started with Test Driven Development (TDD) can be very challenging. It requires a
          different mindset and approach to writing and developing code. However, once in that
          mindset, it is very difficult not to write tests first.
        </p>
        <p>But why bother writing tests first?</p>
        <p>
          In this session, we will go through the reasons for writing tests before coding, look at
          architecture and design principles, such as SOLID and see how it all comes together to
          create a more testable and maintainable application.
        </p>
        <p>
          I will show you how to get started writing tests first with practical examples on how to
          reprogram a T800 series Terminator so you can start using TDD in your own applications (or
          killer robots from the future).
        </p>
        <p>Hasta La Vista badly-written code!</p>
      </div>
    )
  },
  {
    name: 'Alessandro Cinelli',
    company: 'DAZN',
    title: 'Head of DX',
    image: {
      url: 'alessandro-cinelli.jpeg'
    },
    bio: (
      <div>
        <p>
          Alessandro Cinelli (a.k.a. cirpo), Engineering Manager in London, loves building and
          supporting high-performing engineering teams while delivering valuable products that solve
          tangible needs. His focus for the past 4 years has been on internal developer experience,
          improving all the things around the software development cycle for all the people in
          engineering.
        </p>
        <p>He is passionate about Lego, music, devx, communities, management, and people.</p>
      </div>
    ),
    twitter: 'cirpo',
    linkedin: 'cirpo',
    github: 'cirpo',
    abstract: (
      <div>
        <p>
          <strong>Building a DevX team, my story</strong>
        </p>
        <p>
          DevX has been an emerging concept for the past two years, and while we are still trying to
          give it a shared and structured definition in the tech industry, some common questions are
          already arising, and the most compelling one is: where to start with developer experience?
          In this presentation, I will talk about my past 4 years of experience setting up a DevX
          team from scratch, the main challenges, the pain, the gain, and the lessons learned.
        </p>
      </div>
    )
  },
  {
    name: 'Brendan Falk',
    company: 'Fig',
    title: 'Co-founder & CEO',
    image: {
      url: 'brendan-falk.png'
    },
    bio: 'Brendan is co-founder / CEO of Fig.',
    twitter: 'brendanfalk',
    linkedin: 'brendanfalk',
    github: 'brendanfalk',
    abstract: 'Building autocomplete for the terminal '
  },
  {
    name: 'Victor Savkin',
    title: 'Co-founder',
    company: 'Nrwl',
    image: {
      url: 'victor-savkin.jpeg'
    },
    bio: 'Nrwl co-founder, ex-Googler, ex-Angular core. Work on dev tools for TS/JS. Nx and Nx Cloud creator.',
    twitter: 'victorsavkin',
    linkedin: 'victorsavkin',
    github: 'vsavkin',
    abstract: (
      <div>
        <p><strong>The balancing act of delivering high quality DX</strong></p>
        <p>Designing a general-purpose build system involves making a lot of trade-offs: tool-ability vs. expressiveness, efficiency vs. ease of learning, lean configuration vs. discoverability, extensibility vs. API surface. These are in a constant conflict, making it a balancing act of driving coherence while ensuring high-quality DX. Such undertaking can be challenging unless you have an explicit set of design principles to help guide you. </p>
        <p>In this talk, I'll show what such principles look like on the example of Nx, an extensible build system I've been leading for the past 5 years.</p>
      </div>
    )
  },
  {
    name: 'Zach Lloyd',
    title: 'Founder & CEO',
    company: 'Warp',
    image: {
      url: 'zach-lloyd.png'
    },
    bio: (
      <p>
        Founder & CEO @ Warp (<a href='https://www.warp.dev' target='_blank' rel='noopener noreferrer'>www.warp.dev</a>)
      </p>
    ),
    twitter: 'zachlloydtweets',
    linkedin: 'zachlloyd',
    abstract: (
      <div>
        <p><strong>Warp and the future of the terminal</strong></p>
      </div>
    )
  },
  {
    name: 'Lydia Hallie',
    title: 'Staff Developer Advocate',
    company: 'Vercel',
    image: {
      url: 'lydia-hallie.jpeg'
    },
    bio: 'Lydia Hallie is a Staff Developer Advocate at Vercel who primarily focuses on JavaScript, React, Node, serverless technologies, and web performance. She also spends her time mentoring and doing in-person training sessions.',
    twitter: 'lydiahallie',
    linkedin: 'lydia-hallie',
    github: 'lydiahallie',
    abstract: (
      <div>
        <p>As modern applications are getting more and more complex, it's quite easy to end up with large bundle sizes and long loading times. Although there are many tools that can help with performance, there's still a lot you can do as a developer to load your code more efficiently. Fortunately, with the help of modern rendering patterns, we can reduce complexity, bundle sizes, and reduce loading times. In this talk, you'll learn about the implementation and use cases of modern rendering patterns including SSR, (on-demand) ISR, Streaming SSR, React Server Components, Progressive Rehydration, and Selective Rehydration.</p>
      </div>
    )
  },
  {
    name: 'Ant Wilson',
    title: 'Co-Founder & CTO',
    company: '@supabase',
    image: {
      url: 'ant-wilson.jpg'
    },
    bio: 'Co-Founder, CTO, and Chief Meme Officer at Supabase. Ant is a 3x venture backed founder with an MSc in Software Engineering from Imperial College London.',
    twitter: 'antwilson',
    linkedin: 'anthony-wilson-46179937',
    github: 'awalias',
    abstract: (
      <div>
        <p>Ant explores how the Supabase architecture enables "Supa"-DX. Open source and modular technology choices enable Supabase to lower the barrier to deploying backends for your apps and services. We'll explore all the major DX touch points within Supabase, and how we obsess about improving them constantly.</p>
      </div>
    )
  },
];
