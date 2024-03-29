import { Speaker } from '@lib/types';

export const speakers: Speaker[] = [
  {
    name: 'Jason Warner',
    company: 'GitHub',
    title: 'CTO',
    image: {
      url: 'jason-warner.jpeg'
    },
    bio: 'Jason Warner is GitHub’s Chief Technology Officer. In his role, Jason oversees the Office of the CTO, whose mission is to explore the unknown and non-existent aspects of technology and software in order to build a map of GitHub’s future. Jason was previously Senior Vice President of Technology at GitHub, where he has played an integral role in scaling the Engineering, Product, and Security Teams, and building GitHub’s product roadmap to fit the needs of developers around the world.Prior to joining GitHub in 2017, Jason was Vice President of Engineering at Heroku. Before Heroku, Jason oversaw Product Engineering for Ubuntu Desktop and Ubuntu Phone at Canonical. Jason is passionate about building technologies that bring people together, and he’s an active speaker, writer, and advisor.',
    twitter: 'jasoncwarner',
    linkedin: 'jcwarner',
    github: 'jasoncwarner',
    abstract: 'DevX at Heroku and GitHub - An interview with Jason Warner'
  },
  {
    name: 'Erich Gamma',
    company: 'Microsoft',
    title: 'VS Code Dev Lead',
    image: {
      url: 'erich-gamma.jpg'
    },
    bio: (
      <>
        <p>
          Erich is a Microsoft Technical Fellow and is currently working on Visual Studio Code. In
          the past he contributed to Design Patterns, JUnit, Eclipse, and IBM’s Rational Team
          Concert. He works in Zurich and skis in Andermatt, Switzerland.
        </p>
      </>
    ),
    twitter: 'ErichGamma',
    linkedin: 'erichgamma',
    github: 'egamma',
    abstract: 'The evolution of DevX - An interview with Erich Gamma'
  },
  {
    name: 'Henry Zhu',
    company: 'Babel',
    title: 'Core Maintainer',
    image: {
      url: 'henry-zhu.jpeg'
    },
    bio:
      'Henry works in open source as a steward of Babel after leaving a job at Adobe. He wants to understand the future of open source through maintenance, funding efforts, and conversations via Hope in Source podcast.',
    twitter: 'left_pad',
    linkedin: '',
    github: 'hzoo',
    abstract: (
      <p>
        <p>
          <strong>Trapped in the Open Source Supply Chain</strong>
        </p>
        <p>
          Let us talk about the perspective of open source projects as dependencies. As someone in
          the middle of it, I just wanted to share some thoughts on taking what is considered
          largely a hobby and going the donation route. What are maintainers free to work on, what
          is the lifecycle of a project, what is worth funding anyway?
        </p>
      </p>
    )
  },
  {
    name: 'Jean Yang',
    company: 'Akita Software',
    title: 'Founder and CEO',
    image: {
      url: 'jean-yang.jpeg'
    },
    bio: (
      <>
        <p>
          Jean Yang (
          <a href="https://twitter.com/jeanqasaur" target="_blank">
            @jeanqasaur
          </a>
          ) is the founder and CEO of{' '}
          <a href="https://www.akitasoftware.com/" target="_blank">
            Akita Software
          </a>
          , a developer tools company that is bringing structure to observability. Previously, Jean
          was a professor of Computer Science at Carnegie Mellon University. Jean has a PhD from
          MIT, holds software tools patents from work at Microsoft Research and Facebook, and was
          selected as one of the MIT Technology Review's 35 Innovators Under 35 in 2016.
        </p>
      </>
    ),
    twitter: 'jeanqasaur',
    linkedin: 'jean-yang-96575030',
    github: 'jeanqasaur',
    abstract: (
      <>
        <p>
          <strong>"Testing" in Prod Isn't the Only Way: Why Observability Needs Structure</strong>
        </p>
        <p>
          The rise of APIs and service-oriented architectures has made it easier than ever before to
          build complex web applications. But the developer tools we use were made for a simpler
          time, one where developers had more control over all of the software they ran. Today, web
          applications contain many heterogeneous components, all talking to each other across the
          network, many of them SaaS apps. "Testing" in production has become the only way to make
          sense. I'll talk about why we need to update our idea of testing, how we can do better at
          understanding prod, and how bringing structure to observability is the way forward for
          both.
        </p>
      </>
    )
  },
  {
    name: 'Rachel Myers',
    company: 'Google',
    title: 'Engineer',
    image: {
      url: 'rachel-myers.jpg'
    },
    bio:
      "Rachel's an engineer on Firebase Authentication and Security Rules; she focuses on empowering developers to build secure, best-in-class applications that robustly protect users’ privacy. Before joining Google, Rachel co-founded Opsolutely (YC S16), and was an early engineer at GitHub. Outside of work, she mentors and invests in founders from underrepresented backgrounds, serves on the Board for RailsBridge, and has received awards from Women Who Code. She/Her.",
    twitter: 'rachelmyers',
    linkedin: 'rachelmyers',
    github: 'rachelmyers',
    abstract: (
      <>
        <p>
          <strong>Streamlining Firebase Development with local Emulators</strong>
        </p>
        <p>
          People love Firebase for making every read or write just an API call away. What they
          didn’t love was that, for years, the only development environment where you could reliably
          test changes was a duplicate Firebase project. It was expensive, prone to mishaps, and
          required an internet connection at all times. This is the story of building local
          emulators that let a developer set up a new Firebase dev environment in about a minute,
          and the mistakes we made along the way.
        </p>
      </>
    )
  },
  {
    name: 'Ellen Chisa',
    company: 'Darklang',
    title: 'Founder',
    image: {
      url: 'ellen-chisa.jpeg'
    },
    bio: (
      <p>
        Ellen Chisa is founder-in-residence at Boldstart, a first check VC for technical founders.
        Previously, she cofounded Dark (
        <a href="https://darklang.com" target="_blank">
          https://darklang.com
        </a>
        ), a programming language tightly integrated to its editor and infrastructure.
      </p>
    ),
    twitter: 'ellenchisa',
    linkedin: 'ellenchisa',
    github: 'ellenchisa',
    abstract: (
      <>
        <p>
          <strong>Is DevEx not good… because we don't want it to be?</strong>
        </p>
        <p>
          Every developer claims they want something that just works, so they can just get back to
          writing code. But… we love being the latest to use a new tool, take joy in debugging
          problems no one else can solve, and want to know how things work under the hood. Every
          tool claims to make our lives faster and easier, but what do we really want out of our
          developer experience? Maybe we do want it to be hard - just not too hard.
        </p>
      </>
    )
  },
  {
    name: 'Josh Long',
    company: 'VMware',
    title: 'Spring Developer Advocate',
    image: {
      url: 'josh-long.jpeg'
    },
    bio: (
      <>
        <a href="https://twitter.com/starbuxman" target="_blank">
          Josh (@starbuxman)
        </a>{' '}
        has been the first Spring Developer Advocate since 2010. Josh is a Java Champion, author of
        6 books (including O'Reilly's{' '}
        <a
          href="https://www.amazon.com/Cloud-Native-Java-Designing-Resilient/dp/1449374646"
          target="_blank"
        >
          "Cloud Native Java: Designing Resilient Systems with Spring Boot, Spring Cloud, and Cloud
          Foundry"
        </a>{' '}
        and{' '}
        <a href="https://reactivespring.io/" target="_blank">
          "Reactive Spring"
        </a>
        ) and numerous best-selling video training (including{' '}
        <a
          href="https://www.oreilly.com/library/view/building-microservices-with/9780134192468/"
          target="_blank"
        >
          "Building Microservices with Spring Boot Livelessons"
        </a>{' '}
        with Spring Boot co-founder Phil Webb), and an open-source contributor (Spring Boot, Spring
        Integration, Spring Cloud, Activiti and Vaadin, etc), a podcaster ("
        <a href="https://bootifulpodcast.fm/" target="_blank">
          A Bootiful Podcast
        </a>
        ") and a YouTuber.
      </>
    ),
    twitter: 'starbuxman',
    linkedin: 'joshlong',
    github: 'joshlong',
    abstract: (
      <>
        <p>
          {' '}
          <strong>Cloud Native Java</strong>
        </p>
        <p>“It is not necessary to change. Survival is not mandatory.” -W. Edwards Deming</p>
        <p>
          Work takes time to flow through an organization and ultimately be deployed to production
          where it captures value. It’s critical to reduce time-to-production. Software - for many
          organizations and industries - is a competitive advantage. Organizations break their
          larger software ambitions into smaller, independently deployable, feature -centric batches
          of work - microservices. In order to reduce the round-trip between stations of work,
          organizations collapse or consolidate as much of them as possible and automate the rest;
          developers and operations beget “devops,” cloud-based services and platforms automate
          operations work and break down the need for ITIL tickets and change management boards. But
          velocity, for velocity’s sake, is dangerous. Microservices invite architectural complexity
          that few are prepared to address. In this talk, we’ll look at how high performance
          organizations like Ticketmaster, Alibaba, and Netflix make short work of that complexity
          with Spring Boot and Spring Cloud.
        </p>
        <p>
          In this talk, we'll look at how to build cloud-native Java systems that are elastic,
          agile, observable and robust.
        </p>
      </>
    )
  },
  {
    name: 'Shanea Leven',
    company: 'CodeSee',
    title: 'Founder & CEO',
    image: {
      url: 'shanea-leven.jpeg'
    },
    bio: (
      <p>
        Shanea is the co-founder and CEO of a developer platform called{' '}
        <a href="https://www.codesee.io/" target="_blank">
          CodeSee.io
        </a>
        . CodeSee shows you how your code works. CodeSee helps developers to deeply understand how
        your large-scale codebase works, document it, and collaborate continuously. Shanea has spent
        many years as a product leader building platforms for developers at Google, Docker, eBay,
        Cloudflare and most recently she was VP of product at Lob. She studied Computer Science and
        Business.
      </p>
    ),
    twitter: 'shanealeven',
    linkedin: 'shaneak',
    github: '',
    abstract: (
      <>
        <p>
          <strong>Internal DevX Experience is broken… and you should be pissed</strong>
        </p>
        <p>
          Our day to day developer experience is filled with practices that are inefficient, panic
          ridden and just down-right an utter slog. Let's talk about how we can create a more
          delightful daily experience by shifting our perspective from just in time understanding to
          continuous code understanding.
        </p>
      </>
    )
  },
  {
    name: 'Beyang Liu',
    company: 'Sourcegraph',
    title: 'CTO',
    image: {
      url: 'beyang-liu.jpeg'
    },
    bio:
      'Beyang Liu is CTO and cofounder of Sourcegraph. Prior to Sourcegraph, Beyang was a software engineer at Palantir Technologies, where he developed new data analysis software on a small, customer-facing team working with Fortune 500 companies. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab and thoroughly enjoyed his compilers course.',
    twitter: 'beyang',
    linkedin: 'beyang-liu',
    github: 'beyang',
    abstract: (
      <>
        <p>
          {' '}
          <strong>DevX: History of Code Search</strong>
        </p>
        <p>
          What is code search? Code search is an important dev tool for some of the largest and most
          highly respected companies and open-source organizations, but many developers have never
          used it before. We'll go over the history and evolution of code search, why it's becoming
          more popular now, and how it might help you and your collaborators become a better team of
          software engineers.
        </p>
      </>
    )
  },
  {
    name: 'Maël Nison',
    company: 'Yarn',
    title: 'Lead Maintainer',
    image: {
      url: 'mael-nison.jpeg'
    },
    bio:
      'Maël has worked with code repositories from small open source projects to large corporate behemoths. These experiences led to the development of many features seen in Yarn, the JavaScript package manager. Today, Maël is a Senior Software Engineer at Datadog, where he works on developer experience and continues to maintain Yarn.',
    twitter: 'arcanis',
    linkedin: '',
    github: 'arcanis',
    abstract: (
      <>
        <p>
          <strong>Monorepos, are they right for you?</strong>
        </p>
        <p>
          Monorepos are back and more popular than ever. In this talk, we’ll dive into the problems
          they solve, the challenges they create, and how they stack up to the alternatives. By the
          end of this presentation, you’ll have a better idea why so many communities find them
          appealing, and how to decide if monorepos are a good fit for your current and future
          projects.
        </p>
      </>
    )
  },
  {
    name: 'Lili Kastilio',
    company: 'Snyk',
    title: 'Technical Services Architect',
    image: {
      url: 'lili.jpeg'
    },
    bio:
      'Technical Services Architect @ Snyk designing & building TypeScript solutions by working closely with our customers. Recently a Lead Engineer at Snyk working on extending our current languages offering by introducing new languages and language specific concepts into our system in the shape of libraries, parsers and microservices. Spending lots of time working on dependency resolution, understanding the inner workings of package managers and integrating with package registries. When not coding I like to spend my time hanging upside down doing circus things & mentoring others by working on open source side projects in Django + JavaScript.',
    twitter: 'lilianakastilio',
    linkedin: 'kastilioliliana',
    github: 'lili2311',
    abstract: (
      <>
        <p>
          <strong>Why I love incremental delivery and why you should too.</strong>
        </p>
        <p>
          In order to innovate and deliver new products that your users will love you often have to
          design & build very complex features. You may even be the first doing that in that
          particular way, so you will often struggle to find experts on the topic to help you. With
          incremental delivery you can empower your team to become the expert and still have a
          shorter time to market by delivering value to customers one mini feature at a time. At
          Snyk, my team has used incremental delivery to deliver countless technically complex
          features – this is definitely one for your toolbox.
        </p>
      </>
    )
  },
  {
    name: 'Nader Dabit',
    company: 'Serverless @GraphQL',
    title: 'Developer Advocate',
    image: {
      url: 'nader-dabit.jpg'
    },
    bio:
      'Nader Dabit is an author and full stack developer currently working with Edge & Node on DeFi, Web3, and The Graph.',
    twitter: 'dabit3',
    linkedin: 'naderdabit',
    github: 'dabit3',
    abstract: (
      <>
        <p>
          <strong>How to build a dApp</strong>
        </p>
        <p>
          Decentralized apps (dApps) are continuing to gain momentum in the industry. Blockchain
          developers are also now some of the highest paid in the entire industry. Building
          decentralized apps is a paradigm shift that requires a different way of thinking than apps
          built with traditional centralized infrastructure, tooling, and services.
        </p>
        <p>
          As a React developer, I had a hard time understanding this entirely new (to me) ecosystem,
          how everything fit together, and the mental model needed to understand and be a productive
          full stack developer in this space.
        </p>
        <p>
          In this talk, I'll give a comprehensive overview of the space, how you can get started
          building these types of applications, and the entire tech stack broken apart then put back
          together to show how everything works.
        </p>
      </>
    )
  },
  {
    name: 'Anurag Goel',
    company: 'Render',
    title: 'Founder & CEO',
    image: {
      url: 'anurag-goel.jpeg'
    },
    bio: (
      <p>
        Anurag Goel is the founder and CEO of Render (
        <a href="https://render.com" target="_blank">
          https://render.com
        </a>
        ), a modern cloud built for developers. He was previously the 8th employee and the Head of
        Risk at Stripe.
      </p>
    ),
    twitter: 'anuraggoel',
    linkedin: 'anuragoel',
    github: 'anurag',
    abstract: (
      <>
        <p>
          <strong>DevX in the Internet Age: One Step Forward, Two Steps Back</strong>
        </p>
        <p>
          Building and hosting applications has both evolved and devolved since the dawn of the
          Internet. We'll run through the history of DX, from CGI hosting in the nineties to what we
          can look forward to in the new decade.
        </p>
      </>
    )
  },
  {
    name: 'Yihong Cheng',
    company: 'Github1s',
    title: 'Maintainer',
    image: {
      url: 'yihong-cheng.jpg'
    },
    bio: 'Yihong Chen is an engineer, works at Twitter, also an active open-source developer.',
    twitter: 'xcv58',
    linkedin: 'xcv58',
    github: 'xcv58',
    abstract: (
      <>
        <p>
          <strong>The story of GitHub1s - speed & familiarity matters</strong>
        </p>
        <p>
          Almost everyone knows VS Code and probably has tried it. With GitHub1s, you can use VS
          Code as a web app to browse open source codes without cloning the repo. And even switch to
          a PR or a tag to see the changed files side by side. We will share how GitHub1s achieves
          this and what open source community means to us.
        </p>
      </>
    )
  },
  {
    name: 'Kyle Quest',
    company: 'DockerSlim',
    title: 'Creator of',
    image: {
      url: 'kyle-quest.png'
    },
    bio:
      'Kyle has been building applications and platforms using many different cloud service providers and even more programming languages since the early days of cloud computing. He created DockerSlim to simplify the developer experience with containers and to empower developers to build and run containerized cloud-native applications. Kyle is passionate about open source, developer experience, distributed system, Big Data and security. He loves hackathons and taking things apart.',
    twitter: 'kcqon',
    linkedin: 'kylequest',
    github: 'kcq',
    abstract: (
      <>
        <p>
          <strong>Simplifying the Journey of Your Containerized Application from Dev to Production</strong>
        </p>
        <p>
          Creating a containerized application PoC is deceptively simple. Making it production ready is a lot of work though. This talk will cover what’s necessary to have a production ready containerized application and the steps to get there. We’ll explore the best practices and gotchas containerizing applications. We’ll also compare creating production ready containers the hard way and the easy way.
        </p>
      </>
    )
  },
  {
    name: 'Aidan Cunniffe',
    company: 'useoptic',
    title: 'Creator of',
    image: {
      url: 'aidan-cunniffe.jpeg'
    },
    bio:
      'Aidan Cunniffe keeps building developer tools and loves seeing everything the community builds with those tools. He’s the creator of the Optic OSS project that brings Git-like version control to the problem of documenting and managing changes to your APIs. Before that he built, contributed to, and advised many of the early tools in the low code space, and before that, he was building game engines during math class. When he’s not writing code, Aidan is one of the hosts of the API Storytelling stream, a runner, and a performing stand-up comic (jokes are builds, the audience is CI, laughs are green checks — you know why I do it).',
    twitter: 'aidandcunniffe',
    linkedin: 'acunniffe',
    github: 'acunniffe',
    abstract: (
      <>
        <p>
          {' '}
          <strong>Make your APIs Developer-friendly</strong>
        </p>
        <p>
          APIs are not only ‘programming interfaces’ they’re how teams split work, collaborate with
          one another, share capabilities, and make awesome software. Most APIs are internal and
          we’re all in an API relationship with other teams of developers. So let’s talk about how
          good API design, empathy, and modern tools can help you build better relationships with
          the teams around you, great APIs, and amazing products. I’ll be sharing some stories from
          my time in the API space, tools and practices to explore, and some slides from a few
          special guests. If you produce, consume or live with an API — you should definitely make
          time for this talk!
        </p>
      </>
    )
  },
  {
    name: 'Natalie Pistunovich',
    company: 'Aerospike',
    title: 'Lead Developer Advocate',
    image: {
      url: 'natalie.png'
    },
    bio:
      "Natalie is a learner, a Google Developer Expert for Go, an OpenAI Developer Ambassador, a public speaker and a sailor. When she's not working on robust systems at Aerospike, she is organizing the conferences: GopherCon Europe, Cloud Nein, HeyAI and BSides Berlin, and the Berlin chapters of the Go and Women Techmakers user groups. Previously, she was an Engineering Manager, Software and Hardware Engineer, and a Co-Founder of a mobile start-up. In her free time, she is wondering if there is life on Mars.",
    twitter: 'NataliePis',
    linkedin: 'nataliepistunovich',
    github: 'Pisush',
    abstract: (
      <>
        <p>
          <strong>Building a K8s Operator for a Distributed Database</strong>
        </p>
        <p>
          How did we build a k8s operator that allows 100% up time for a high availability high
          workload database? Operating a distributed high load, high throughput database in the
          cloud comes with several interesting challenges. In order to manage real-time serving of
          mission critical workloads at 100% availability we developed a Kubernetes operator that
          handles the operational complexities.
        </p>
        <p>We needed to handle the following requirements:</p>
        <ul>
          <li>Apply live patches</li>
          <li>Replace live cluster with tens of nodes</li>
          <li>Handle degraded/crashed nodes</li>
        </ul>
        <p>Under these conditions:</p>
        <ul>
          <li>High Availability</li>
          <li>remain 100% online with no down time</li>
          <li>Operate under very high workloads and traffic</li>
          <li>Manage replicated records across different hardware failure groups (rack awareness)</li>
        </ul>
        <p>Due to its stateful nature and the type of workloads that are usually handled, cluster management and recovery are non-trivial. We are using the Operators API to handle that complexity and control the clusters from within Kubernetes. In this talk we’ll cover the steps we took to plan and execute and the challenges we faced and share the best practices.</p>
      </>
    )
  },
  {
    name: 'Tuomas Artman',
    company: 'Linear',
    title: 'CTO',
    image: {
      url: 'tuomas-artman.jpeg'
    },
    bio: '',
    twitter: 'artman',
    linkedin: 'tuomasartman',
    github: 'artman',
    abstract: (
      <>
        <p>
          <strong>
            How to prioritize dev experience in the development process above all else
          </strong>
        </p>
      </>
    )
  },
  {
    name: 'Ian Jennings',
    company: 'HaxorDX',
    title: 'Founder',
    image: {
      url: 'ian-jennings.jpeg'
    },
    bio:
      'Ian Jennings is the founder of Haxor, a developer experience testing platform. Haxor tests and measures APIs, SDKs, and developer products with on-demand feedback from real developers.',
    twitter: '@ianj3nnings',
    linkedin: 'jnnngs',
    github: 'ianjennings',
    abstract: (
      <>
        <p>
          <strong>
            Find friction in your developer experience by user testing with developers.
          </strong>
        </p>

        <p>
          Do you know what's stopping developers from getting started with your product? Developer
          experience testing exposes the developer's point of view as they get started with your
          product. You don't need to be a UX researcher to start gathering feedback today. This talk
          will show you how you can run your own DX test in minutes with free tools.
        </p>
      </>
    )
  },
  {
    name: 'Yevgeny Pats',
    company: 'CloudQuery',
    title: 'Founder',
    image: {
      url: 'yevgeny-pats.jpeg'
    },
    bio: '',
    twitter: 'yevgenypats',
    linkedin: 'yevgeny-pats-5973328b',
    github: 'yevgenypats',
    abstract: ''
  },
  {
    name: 'Inian Parameshwaran',
    company: 'Supabase',
    title: 'Senior Software Engineer',
    image: {
      url: 'inian.jpeg'
    },
    bio:
      'Inian Parameshwaran is a Senior Software Engineer at Supabase, an open-source Firebase alternative. He likes chocolates, working on developer tools and is passionate about security and performance. Previously, he founded a venture backed startup which helps speed up websites automatically. Did I mention he likes chocolates?',
    twitter: 'everconfusedguy',
    linkedin: 'inianp',
    github: 'inian',
    abstract: (
      <>
        <p>
          {' '}
          <strong>Building Supabase Storage. DevX, performance, security - choose three</strong>
        </p>

        <p>
          Balancing Developer Experience with other concerns like performance and security is not
          straightforward. For example, you might be able to expose a simpler API at the cost of
          system performance. This talk goes into how we balance these concerns when we launched
          Supabase Storage.
        </p>

        <p>
          Supabase Storage is an object storage service that tightly integrates with Postgres and
          leverages our existing Auth System elegantly. There are a lot of interesting design
          choices we had to make along the way to build the storage middleware and the client APIs.
          We explore why we built yet another object storage system and the pitfalls we avoided by
          evaluating prior work. The architecture we settled on also had the benefit of being
          extensible to more storage backends in the future. We also put in a lot of thought in
          making the storage client APIs simple and familiar.
        </p>
      </>
    )
  },
  {
    name: "Stephen O'Grady",
    company: 'RedMonk',
    title: 'Co-Founder',
    image: {
      url: 'steve-o-grady.jpeg'
    },
    bio: '',
    twitter: 'sogrady',
    linkedin: 'sogrady',
    github: 'sogrady',
    abstract: (
      <>
        <p>
          {' '}
          <strong>The developer experience gap</strong>
        </p>
      </>
    )
  },
  {
    name: 'Thomas Paul Mann',
    company: 'Raycast',
    title: 'CEO & Co-Founder',
    image: {
      url: 'thomas-paul-mann.jpeg'
    },
    bio:
      "Thomas loves to make tools. He's co-founder and CEO of Raycast and previously built products as a software engineer at Facebook.",
    twitter: 'thomaspaulmann',
    linkedin: 'thomas-paul-mann-5183101a4',
    github: 'thomaspaulmann',
    abstract: (
      <>
        <p>
          <strong>
            How to prioritize dev experience in the development process above all else
          </strong>
        </p>
      </>
    )
  },
  {
    name: 'Borja Burgos',
    company: 'Datadog',
    title: 'Director of Product',
    image: {
      url: 'bojra-burgos.jpeg'
    },
    bio: (
      <p>
        Borja Burgos is a DevEx-obsessed entrepreneur and technologist. In 2013 he co-founded Tutum
        – a platform for developers to build and run their Docker applications. After Tutum's
        acquisition by Docker in 2015, Borja relentlessly continued working on new tools and
        services to delight developers, from their local desktops to their cloud environments.
        Disappointed with the complexity, and lack of visibility, in modern-day testing and
        continuous integration workflows he left Docker to co-founded Undefined Labs, makers of{' '}
        <a href="https://scope.dev/" target="_blank">
          Scope
        </a>{' '}
        and{' '}
        <a href="https://ctr.run/" target="_blank">
          ctr.run
        </a>
        . Now as part of Datadog, Borja and the rest of the{' '}
        <a href="https://undefinedlabs.com/" target="_blank">
          Undefined Labs
        </a>{' '}
        team are building the next generation of developer-centric observability tools!
      </p>
    ),
    twitter: 'borja_burgos',
    linkedin: 'borjaburgos',
    github: 'borjaburgos',
    abstract: (
      <>
        <p>
          <strong>Using Observability to improve the Developer Experience</strong>
        </p>
        <p>
          Observability is often associated with production and live environments, but it shouldn't
          be! In this talk we'll explore innovative ways in which modern observability tools and
          best practices can be leveraged during development to: improve developer productivity,
          identify regressions earlier in the SDLC, and increase the performance and reliability of
          our CI/CD workflows.
        </p>
      </>
    )
  },
  {
    name: 'Mike Nikles',
    company: 'Gitpod',
    title: 'Senior Developer Success Engineer',
    image: {
      url: 'mike-nikles.png'
    },
    bio:
      'Mike Nikles is a software architect who values developer experience, productivity and team morale. For two decades, Mike has taken ideas from inception to production, at startups or as lead for teams at large companies. He works as a Senior Developer & Customer Success Engineer at Gitpod where he helps teams automate their ephemeral development environments.',
    twitter: 'mikenikles',
    linkedin: 'mikenikles',
    github: 'mikenikles',
    abstract: (
      <>
        <p>
          <strong>Ephemeral Development Environments</strong>
        </p>
        <p>
          Local, long-lived development environments are what we are used to. We spend effort to
          configure and nurture them, which takes time away from more important tasks. In this talk,
          Mike and Anton introduce the concept of ephemeral development environments, their benefits
          and how you can get started right away too.
        </p>
      </>
    )
  },
  {
    name: 'Anton Kosyakov',
    company: 'Gitpod',
    title: 'Principal Software Engineer',
    image: {
      url: 'anton-kosyakov.jpeg'
    },
    bio:
      'Anton has been working on Gitpod since its beginning. He is responsible for providing tight and up-to-date integration of VS Code with Gitpod workspaces.',
    twitter: 'akosyakov',
    linkedin: 'anton-kosyakov-4093b610',
    github: 'akosyakov',
    abstract: (
      <>
        <p>
          <strong>Ephemeral Development Environments</strong>
        </p>
        <p>
          Local, long-lived development environments are what we are used to. We spend effort to
          configure and nurture them, which takes time away from more important tasks. In this talk,
          Mike and Anton introduce the concept of ephemeral development environments, their benefits
          and how you can get started right away too.
        </p>
      </>
    )
  },
  {
    name: 'Ahmad Awais',
    company: 'RapidAPI',
    title: 'Head of Developer Relations ',
    image: {
      url: 'ahmad-awais.jpeg'
    },
    bio: <>
      <p>
        <a href="https://twitter.com/MrAhmadAwais/" target="_blank">Ahmad Awais</a> is an <a href="https://www.linkedin.com/feed/update/urn:li:activity:6790272195416350720/" target="_blank">award-winning</a> open-source engineer​,​ Head of Developer Relations at <a href="https://rapidapi.com/company/about/" target="_blank">RapidAPI</a>, Google Developers Expert ​Dev Advocate, Node.js Community Committee Outreach Lead, WordPress Core​ Dev​, and ex VP ​of ​Engineering​​ at WGA. He has authored various open-source software tools used by millions of developers worldwide, like his <a href="https://ShadesOfPurple.pro/more" target="_blank">Shades of Purple</a> code-theme​ or projects like the​ <a href="https://github.com/AhmadAwais/corona-cli" target="_blank">corona-cli</a>​.
      </p>
      <p>
        ​Awais ​loves to teach. Over 20,000 developers are learning from his courses ​, i.e., <a href="https://NodeCLI.com/?utm_medium=referral&amp;utm_campaign=speaking" target="_blank">NodeCLI.com</a>, <a href="https://VSCode.pro/?utm_medium=referral&amp;utm_campaign=speaking" target="_blank">VSCode.pro</a>,​ <a href="https://NextjsBeginner.com/?utm_medium=referral&amp;utm_campaign=speaking" target="_blank">NextjsBeginner.com</a>​​. He has spoken at 100+ tech conferences, including TEDx, ReactLive, Node Summit, Google Dev Summit, Next.js Conf. ​Awais received the FOSS community leadership recognition as one of the first 12 featured <a href="https://ahmadawais.com/github-stars/" target="_blank">GitHub Star</a> with a gold <a href="https://www.linkedin.com/feed/update/urn:li:activity:6790272195416350720/" target="_blank">GitHub Stars Award</a>. ​He is a member of the SmashingMagazine Experts Panel; featured &amp; published author at CSS-Tricks, Tuts+, Scotch.io, SitePoint. You can mostly find ​him on Twitter <a href="https://twitter.com/MrAhmadAwais/" target="_blank">@MrAhmadAwais</a>, where he tweets his <a href="https://Awais.dev/odmt" target="_blank">#OneDevMinute</a> developer tips.
      ​</p>
    </>,
    twitter: 'MrAhmadAwais',
    linkedin: 'mrahmadawais',
    github: 'ahmadawais',
    abstract: <>
      <p>VSCode Power User Tips & Tricks</p>
      <p>
      After 10 years with Sublime Text, I switched to VSCode — the new open-source cross-platform editor everyone's talking about. I've spent over 1,000 hours perfecting my setup to help you switch today. In this talk, you'll get to learn tens of VSCode Power User workflows that'll help you save time and code more efficiently. Text manipulation to multi-cursors and even Markdown tips/tricks. You name it.
      </p>
    </>
  },
];
