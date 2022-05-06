/* eslint-disable @typescript-eslint/ban-ts-comment */
import write from 'write';
import { dirname } from 'path';

import { fileURLToPath } from 'url';
import { Speaker, Stage } from '@lib/types';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const targetPath = __dirname.replace('contents', 'public') + '/json';

const speakers2022: Speaker[] = [
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
    abstract: `
		<div>
		  <p>
			<strong>The Radiating Circles of DevX</strong>
		  </p>
		  <p>
			building upon <a
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
	  `
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
    abstract: `
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
	  `
  },
  {
    name: 'Himanshu Mishra',
    title: 'Developer Advocate',
    company: 'Spotify',
    image: {
      url: 'himanshu-mishra.png'
    },
    bio:
      'Himanshu is a Developer Advocate at Spotify working on backstage.io, previously an engineer and a core contributor to the project. He lives by "Happy Developers write happy code" and he loves advocating for Backstage and its impact on improving Developer Experience.',
    twitter: 'OrkoHunter',
    linkedin: 'OrkoHunter',
    github: 'OrkoHunter',
    abstract: `
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
	  `
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
    abstract: `
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
	  `
  },
  {
    name: 'Arsh Sharma',
    company: 'Okteto',
    title: 'Developer Experience Engineer',
    image: {
      url: 'arsh-sharma.jpeg'
    },
    bio:
      'Arsh is a Developer Experience Engineer at Okteto. He is active in the open-source community and has contributed to multiple CNCF projects, including Kubernetes, cert-manager, and Kyverno. He received the Kubernetes Contributor Award for his contributions to the project last year. He loves simplifying technical concepts through his blogs and is also fond of sharing his experiences at conferences.',
    twitter: 'rinkiyakedad',
    linkedin: 'arsh4',
    github: 'RinkiyaKeDad',
    abstract: `
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
	  `
  },
  {
    name: 'Ana Hevesi',
    title: 'Devtools UX Researcher',
    image: {
      url: 'ana-hevesi.jpg'
    },
    bio:
      'Ana Hevesi provides DX research services to inform DevRel and product strategy as an independent consultant. Previously, Ana shipped platform updates to ease tensions between Stack Overflow users, launched the first Node.js hosting platform, helped the Filecoin team prepare for outside contributors, and conducted user research at MongoDB. ',
    twitter: 'anthrocypher',
    linkedin: 'ananoemi',
    abstract: `
		<div>
		  <p>
			<strong>"Peer Learning: Your developer adoption safety net"</strong>
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
	  `
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
    abstract: `
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
	  `
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
    abstract: `
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
	  `
  },
  {
    name: 'Cirpo Cinelli',
    company: '',
    title: 'DevX Engineering Manager',
    image: {
      url: 'alessandro-cinelli.jpeg'
    },
    bio: `
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
	  `,
    twitter: 'cirpo',
    linkedin: 'cirpo',
    github: 'cirpo',
    abstract: `
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
	  `
  },
  {
    name: 'Brendan Falk',
    company: 'Fig',
    title: 'Co-founder & CEO',
    image: {
      url: 'brendan-falk.png'
    },
    bio:
      'Brendan is co-founder/CEO of Fig. Fig makes the terminal easier for beginners, more productive for advanced engineers, and more collaborative for teams. Fig is backed by YC, General Catalyst, and founders/executives from Stripe, Heroku, Adobe, and GitHub. Brendan graduated from Harvard College in 2020 is originally from Australia.',
    twitter: 'brendanfalk',
    linkedin: 'brendanfalk',
    github: 'brendanfalk',
    abstract: 'How Fig makes engineers 10x more productive in the terminal.'
  },
  {
    name: 'Victor Savkin',
    title: 'Co-founder',
    company: 'Nrwl',
    image: {
      url: 'victor-savkin.jpeg'
    },
    bio:
      'Nrwl co-founder, ex-Googler, ex-Angular core. Work on dev tools for TS/JS. Nx and Nx Cloud creator.',
    twitter: 'victorsavkin',
    linkedin: 'victorsavkin',
    github: 'vsavkin',
    abstract: `
		<div>
		  <p>
			<strong>The balancing act of delivering high quality DX</strong>
		  </p>
		  <p>
			Designing a general-purpose build system involves making a lot of trade-offs: tool-ability
			vs. expressiveness, efficiency vs. ease of learning, lean configuration vs.
			discoverability, extensibility vs. API surface. These are in a constant conflict, making
			it a balancing act of driving coherence while ensuring high-quality DX. Such undertaking
			can be challenging unless you have an explicit set of design principles to help guide you.
		  </p>
		  <p>
			In this talk, I'll show what such principles look like on the example of Nx, an extensible
			build system I've been leading for the past 5 years.
		  </p>
		</div>
	  `
  },
  {
    name: 'Zach Lloyd',
    title: 'Founder & CEO',
    company: 'Warp',
    image: {
      url: 'zach-lloyd.png'
    },
    bio: `
		<p>
		  Zach is currently the CEO and founder of Warp, which is reinventing the terminal, making it
		  10x more usable for developers and teams. Prior to Warp, he was the interim CTO at TIME,
		  co-founder and CTO of SelfMade, and a Principal Engineer at Google leading development on
		  Google Docs, Sheets, and Slides. Zach aims to create software that has a positive impact on
		  a lot of people. He also loves playing guitar and hanging with his pup Blue.
		</p>
	  `,
    twitter: 'zachlloydtweets',
    linkedin: 'zachlloyd',
    abstract: `
		<div>
		  <p>
			<strong>Warp and the future of the terminal</strong>
		  </p>
		</div>
	  `
  },
  {
    name: 'Lydia Hallie',
    title: 'Staff Developer Advocate',
    company: 'Vercel',
    image: {
      url: 'lydia-hallie.jpeg'
    },
    bio:
      'Lydia Hallie is a Staff Developer Advocate at Vercel who primarily focuses on JavaScript, React, Node, serverless technologies, and web performance. She also spends her time mentoring and doing in-person training sessions.',
    twitter: 'lydiahallie',
    linkedin: 'lydia-hallie',
    github: 'lydiahallie',
    abstract: `
		<div>
		  <p>
			As modern applications are getting more and more complex, it's quite easy to end up with
			large bundle sizes and long loading times. Although there are many tools that can help
			with performance, there's still a lot you can do as a developer to load your code more
			efficiently. Fortunately, with the help of modern rendering patterns, we can reduce
			complexity, bundle sizes, and reduce loading times. In this talk, you'll learn about the
			implementation and use cases of modern rendering patterns including SSR, (on-demand) ISR,
			Streaming SSR, React Server Components, Progressive Rehydration, and Selective
			Rehydration.
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
		  Supabase launched Edge Functions recently. This talk is a peek behind the curtains about how Supabase approaches Developer Experience. A lot of decisions went into ensuring that authoring and deploying functions on Supabase is as seamless as possible and I go over some of the tradeoffs we took. 
		  </p>
		</div>
	  `
  },
  {
    name: 'Tarun Pothulapati',
    title: 'Engineer',
    company: 'Gitpod',
    image: {
      url: 'tarun-pothulapati.jpg'
    },
    bio:
      'Tarun Pothulapati is an Engineer at Gitpod working on democratising cloud developer environments. Previously, He was a maintainer of Linkerd, an open source, CNCF Incubated Service Mesh project. He also spends his time contributing to other OSS projects like Tracing, etc. Apart from work, He’s trying to be a marathon runner, and is a big coffee enthusiast.',
    twitter: 'tarrooon',
    linkedin: 'tpothulapati',
    github: 'pothulapati',
    abstract: `
		<div>
		  <p>
			<strong>Remote development in a remote-first world</strong>
		  </p>
		  <p>
			Is your development environment a pet? Convert that pet into cattle by going remote! Our
			development environments continue to become more and more complex to set up. Each project
			we work on has a unique set of dependencies and keeping everything up to date can be a
			full time job. With Kubernetes, we made the transition from services operating on pet-like
			infrastructure to cattle. By packaging dependencies and spinning up on-the-fly
			environments, we can make the same transition for development environments.
		  </p>
		  <p>
			In this talk, you will learn where remote development environments have been, where they
			are today and where they’re going in the future. We will discuss why right now is a
			perfect time to adopt this new style of development and provide a clear path to adopting
			the best practices required to convert your pet-like development environment into cattle.
		  </p>
		  <p>The following points will be covered in depth:</p>
		  <ul>
			<li>Problem space that remote development environments solve, and it’s approach.</li>
			<li>How VS Code Remote IDE, JetBrains Fleet, etc work.</li>
			<li>Code from Anywhere, Any Device (due to Browser support)</li>
			<li>On-Demand, Development environments</li>
			<li>
			  Standardisation of developer environments with formats like devContainer.json,
			  gitpod.yml, etc to provide project specific environments.
			</li>
			<li>
			  How this model goes very well with OSS development where you want folks to spend as less
			  time on the configuration of dev environment
			</li>
		  </ul>
		  <p>
			By the end of this talk, Audiences will leave with the past, present and future of Remote
			Developer Environments, and have an understanding of how they can make use of it in their
			existing projects and companies. Instead of focusing on the specific implementation, tools
			on how it's done, we focus on the concepts itself so that the audience are free to choose
			whatever implementations that they are comfortable with.
		  </p>
		</div>
	  `
  },
  {
    name: 'Oleg Šelajev',
    title: 'Developer Advocate',
    company: 'AtomicJar',
    image: {
      url: 'oleg-selajev.jpg'
    },
    bio:
      'Oleg Šelajev is a developer advocate at AtomicJar working integration tests with Testcontainers better for everyone in the community. VirtualJUG leader. In 2017 became a Java Champion.',
    twitter: 'shelajev',
    linkedin: 'shelajev',
    abstract: `
		<div>
		  <p>
			<strong>How to make a world-class integration testing library?</strong>
		  </p>
		  <p>
			Excellent developer experience is a careful balance between boredom and anxiety. Ideally,
			it would make solving simple problems trivial, complex ones simple, and have enough
			flexibility to inspire hope for tackling the impossible ones!
		  </p>
		  <p>
			In this session, we’d like to share the story of Testcontainers - the world’s most popular
			integration testing libraries. And look at the developer experience choices that led
			libraries aimed at a tedious and often ungrateful task of environment setup and
			integration testing to bring joy and even influence how developers approach their projects
			altogether.
		  </p>
		</div>
	  `
  },
  {
    name: 'Alayshia Knighten',
    title: 'Manager, Onboarding Engineering',
    company: 'Honeycomb',
    image: {
      url: 'alayshia-knighten.jpg'
    },
    bio:
      'Alayshia is an Onboarding Engineering manager at Honeycomb who specializes in Observability and Production Excellence. She is also a modern-day hippie that simply enjoys getting "ish" done while "buzzing" around with customers, transforming their DevOps world.',
    linkedin: 'alayshia',
    abstract: `
		<div>
		  <p>
			<strong>Progressive Delivery with Observability</strong>
		  </p>
		  <p>
			Build, test, and deploy can be a bloody nightmare. So we try in non-production
			environments and hold our breath, hoping that everything is okay when we push our
			deployments to production. When it's not okay, we waste time mimicking a fake production
			environment. What if I told you we had a way to monitor our production systems based on
			the data we receive from them?**cough** Observability *cough*
		  </p>
		  <p>
			Let's ask questions about our production systems, allow the data to report back, and
			answer the question, "is it safe to continue?" Using data-driven decisions in our CI/CD
			workflows lets us breathe easy "knowing" what's in front of us.
		  </p>
		</div>
	  `
  },
  {
    name: 'Boris Kirov',
    title: 'Senior Product Designer',
    company: 'Elastic',
    image: {
      url: 'boris-kirov.jpg'
    },
    bio:
      'Boris is a Bulgarian product designer, currently based in Amsterdam, The Netherlands. His interest in form and function lets him express himself with technology. Fascinated by computers, he is constantly experimenting with software to understand how programs communicate between each other and how we communicate with them. His passion for open source, collaboration and developer experience led him to Elastic, while previously he used to design the Platform experience at Miro.',
    twitter: 'sboriskirov',
    github: 'boriskirov',
    linkedin: 'boris-kirov-b6b110a4',
    abstract: `
		<div>
		  <p>
			<strong>"Designing for developers"</strong>
		  </p>
		  <p>
			In this talk we will go on a journey of understanding what designing for developers is,
			and how important it is to gain empathy and connect with your audience. We will go through
			concepts and methods for designing great developer experience, by covering the
			fundamentals of computer programming, web development and design thinking process. This
			talk will allow designers, managers and people outside of the engineering group to
			deep-dive in what it means to experience the development and usage of software.
		  </p>
		</div>
	  `
  },
  {
    name: 'Maya Kaczorowski',
    title: 'Product Manager',
    company: 'Tailscale',
    image: {
      url: 'maya-kaczorowski.jpg'
    },
    bio:
      'Maya is a Product Manager at Tailscale, providing secure networking for the long tail. She was previously at GitHub in software supply chain security, and before that at Google working on container security and encryption key management. Prior to Google, Maya worked at McKinsey, and studied mathematics.',
    twitter: 'MayaKaczorowski',
    linkedin: 'mayakaczorowski',
    github: 'mayakacz',
    abstract: `
		<div>
		  <p>
		  	Although many development teams have now adapted to working remotely, far fewer are developing remotely. We all know the benefits of remote work - freedom and flexibility to work where and when you want - but we don’t often talk about the downsides, specifically thte isolation that comes from working alone.
		  </p>
		  <p>
		  	In this talk, we’ll discuss a few ways that developing remotely can actually help address some of the hurdles your team might face working remotely. Tools on their own can’t fix organizational challenges, but paired with the right operations, your team can get the best of both worlds, with better developer onboarding, developer velocity, and simpler, more secure access to shared resources. 
		  </p>
		  <p>
			So, if you’ve already had success working remotely, maybe it’s time to try developing remotely. 
		  </p>
		</div>
	  `
  },
  {
    name: 'Michael Bleigh',
    title: ' Staff Software Engineer',
    company: 'Google',
    image: {
      url: 'michael-bleigh.jpg'
    },
    bio:
      "Michael is an engineering leader at Firebase and has been building stuff to make developers' lives easier for more than a decade. Michael's experience across open source (creator of Ruby libraries such as omniauth and grape), startups (founder of Divshot), and scaled platforms (Firebase) gives him a great deal of empathy for developers and the challenges they face. Michael has also spoken at events including Railsconf, Rubyconf, OSCON, and Google I/O.",
    twitter: 'mbleigh',
    linkedin: 'mbleigh',
    github: 'mbleigh',
    abstract: `
		<div>
		  <p>
		  	<strong>What does it mean to create API products at scale? How do you do it well and keep the wheels from coming off?</strong>
		  </p>
		  <p>
		  	Firebase is a massive developer platform with 15+ products offered across 6+ platforms. Firebase is also known for a high-quality consistent developer experience. In this talk, peek behind the scenes at how Firebase keeps the quality bar high for its APIs while continuously evolving and growing its products. Learn how boring words like "process" and "governance" can play a pivotal and even enjoyable role in the building of complex developer systems.
		  </p>
		</div>
	  `
  },
  {
    name: 'Nathan Sobo',
    title: 'Programmer / Entrepreneur',
    company: 'Zed',
    image: {
      url: 'nathan-sobo.jpeg'
    },
    bio: `
			<div>
			<p>
				Nathan joined GitHub in late 2011 to build the Atom text editor, and he led the Atom team until 2018.
			</p>

			<p>
				He also co-led development of Teletype for Atom, pioneering one of the first production uses of conflict-free replicated data types for collaborative text editing.
			</p>
			
			<p>
				He's been dreaming about building the world’s best text editor since he graduated from college, and is excited to finally have the knowledge, tools, and resources to achieve this vision. 
			</p>
			</div>
		`,
    twitter: 'nathansobo',
    github: 'nathansobo',
    abstract: `
		<div>
			<p>Zed: Collaborative coding at the speed of light</p>
			<p>
				<a href="https://zed.dev" >Zed</a> is a fast, collaborative code editor created by the same team that brought you GitHub's Atom editor, and we're preparing to launch a private alpha in the coming weeks. In this talk, I l will demo Zed publicly for the first time and explore its unique features as well as interesting aspects of its implementation. This includes our use of conflict-free replicated data types, our custom hardware-accelerated UI framework, and the unique testing strategies we've devised to make collaborative code editing "just work".
			</p>
		</div>
	  `
  },
  {
    name: 'Kirill Skrygan',
    title: 'Department Lead',
    company: 'Intellij',
    image: {
      url: 'kirill-skrygan.jpg'
    },
    bio: `Intellij Department lead`,
    twitter: 'kskrygan',
    github: 'kskrygan',
    linkedin: 'kirill-skrygan-7b86073a',
    abstract: `
		<p>
			Panel talk on remote development.
		</p>
	  `
  },
  {
    name: 'Nik Molnar',
    title: ' Product Director on Codespaces',
    company: 'GitHub',
    image: {
      url: 'nik-molnar.jpg'
    },
    bio: `Nik Molnar is the Director of Product on Codespaces at GitHub. He is a father, daddy, baseball player, board gamer, Pluralsight author, lover of the web, and home chef.`,
    twitter: 'nikmd23',
    github: 'nikmd23',
    linkedin: 'nikmd23',
    abstract: `
		<p>
			Panel talk on remote development.
		</p>
	  `
  },
  {
    name: 'Johannes Landgraf',
    title: 'Co-founder & Co-CEO',
    company: 'Gitpod',
    image: {
      url: 'johannes.jpeg'
    },
    bio: `Co-CEO & Co-Founder Gitpod`,
    twitter: 'johannneslandgraf',
    github: 'johannneslandgraf',
    abstract: `
		<p>
		Panel talk on remote development.
		</p>
	  `
  },
  {
    name: 'Sven Efftinge',
    title: 'Co-founder & Co-CEO',
    company: 'Gitpod',
    image: {
      url: 'sven-efftinge.jpeg'
    },
    bio: `Sven is a Co-founder and Co-CEO of Gitpod. Before Gitpod he built and designed other development tools and programming languages. In his spare time he enjoys living at and kitesurfing on the baltic sea.`,
    twitter: 'svenefftinge',
    github: 'svenefftinge',
    abstract: `
		<p>
		Panel talk on remote development.
		</p>
	  `
  },
  {
    name: 'Christof Marti',
    title: 'Principal Software Engineer',
    company: 'Microsoft',
    image: {
      url: 'christof-marti.jpeg'
    },
    bio: `Christof is the lead software engineer on the dev container project and a member of the VS Code team at Microsoft.`,
    abstract: `
		<p>
		Panel talk on remote development.
		</p>
	  `
  },
  {
    name: 'Chad Metcalf',
    title: 'Building a Self Hosted Business',
    company: 'Gitpod',
    image: {
      url: 'chad-metcalf.jpg'
    },
    bio: `Currently helping to build Gitpod. Docker, Cloudera, Puppet, WibiData alumni. Advising startups. Angel investor.`,
    twitter: 'metcalfc',
    github: 'metcalfc',
    abstract: `
		<p>
		Panel talk on a history and how Docker thought about DevX.
		</p>
	  `
  },
  {
    name: 'Ben Firshman',
    title: 'Founder',
    company: 'Replicate',
    image: {
      url: 'ben-firshman.jpg'
    },
    bio: `Founder of Replicate. Previously, he was product at Docker and was one of the creators of Docker Compose. He also founded a few companies, written things like https://clig.dev/ , helped create The Guardian’s iPad app, and worked on GOV.UK.`,
    twitter: 'bfirsh',
    abstract: `
		<p>
		Panel talk on a history and how Docker thought about DevX.
		</p>
	  `
  },
  {
    name: 'Arnaud Porterie',
    title: 'Founder',
    company: 'Echoes HQ',
    image: {
      url: 'arnaud-porterie.jpg'
    },
    bio: `Arnaud Porterie is the founder of Echoes HQ, a product helping hundreds of engineering organizations maximize their impact.

		At Docker, Arnaud has managed one of the most active open source communities with over a 400 weekly contributors. Running a project at this scale has taught him both the importance of data for decision making and the importance of developer experience.
		
		At Veepee, Arnaud has scaled a team of 350 to a European-wide organization of 900. He realized there how unequipped were engineering leaders to make data informed decisions and effectively communicate on their teams' activity in a way that their business partners and bosses could understand.`,
    twitter: 'arnaudporterie',
    abstract: `
		<p>
		Panel talk on a history and how Docker thought about DevX.
		</p>
	  `
  },
  {
    name: 'Andrea Luzzardi',
    title: 'Co-Founder',
    company: 'Dagger',
    image: {
      url: 'andrea-luzzardi.png'
    },
    bio: `Co-Founder at Dagger. Previously engineering at Docker, Google & Microsoft.`,
    twitter: 'aluzzardi',
    abstract: `
		<p>
		Panel talk on a history and how Docker thought about DevX.
		</p>
	  	`
  },
  {
    name: 'Shanea Leven',
    title: 'Co-founder & CEO',
    company: 'CodeSee',
    image: {
      url: 'shanea-leven.jpeg'
    },
    bio: `Shanea Leven is co-founder and CEO of CodeSee, a code understanding platform helping developers and teams onboard to codebases, improve code review, code planning, and more. Prior to CodeSee, Shanea led dev-focused product teams at Cloudflare, Docker, eBay and Google. Follow Shanea on Twitter @ShaneaLeven and CodeSee @CodeSeeio.`,
    twitter: 'shanealeven',
    abstract: `
		<p>
		Code Reviews is more than a crushing Developer Experience, its really a deeply human experience.
		</p>
	  `
  },
  {
    name: 'Wilson Mar',
    title: 'Senior Domain Architect',
    company: 'Hashicorp',
    image: {
      url: 'wilson-mar.jpeg'
    },
    bio: `After surviving dozens of botched onboardings as both employee and consultant, Wilson Mar has championed better processes, earlier for fellow developers and others at enterprise software organizations.`,
    github: 'wilsonmar',
    linkedin: 'wilsonmar',
    abstract: `
		<p>
		How to onboard people in a day. Companies that drag out onboarding drain the goodwill of new people. Here are dozens of specific, concrete actions to ensure instant productivity from joiners.
		</p>
	  `
  }
];

const hosts2022: Speaker[] = [
  {
    name: 'Michael Aring',
    company: 'Gitpod',
    title: 'GTM & DCS Lead',
    image: {
      url: 'michael-aring.jpg'
    },
    bio:
      'Michael Aring is a Go-to-Market Lead at Gitpod. He is passionate about beautiful products and product-led growth. In the past, Michael has worked in venture capital at coparion and Riverside Acceleration Capital. Prior to that, he studied computer science at University College London and founded a travel marketplace in Mexico.',
    twitter: 'MichaelAr1ng',
    linkedin: 'michaelaring'
  },
  {
    name: 'Pauline Narvas',
    company: 'Gitpod',
    title: 'Senior Community Engineer',
    image: {
      url: 'pauline-narvas.jpg'
    },
    bio:
      'Pauline Narvas (she/her/hers) is a passionate multi-hyphenate. She’s worked in the tech industry for the past 3 years and is currently working at Gitpod as a Senior Community Engineer. Pauline is all about community and so alongside her role at Gitpod, she runs a community group called, “Ladies in DevOps”, a safe space for self-identifying women working in the DevOps/SRE/Cloud space to learn and connect with each other. She also hosts the DevX Podcast.',
    twitter: 'paulienuh',
    linkedin: 'pnarvas',
    github: 'pawlean'
  }
];

export const speakers2021: Speaker[] = [
  {
    name: 'Jason Warner',
    company: 'GitHub',
    title: 'CTO',
    image: {
      url: 'jason-warner.jpeg'
    },
    bio:
      'Jason Warner is GitHub’s Chief Technology Officer. In his role, Jason oversees the Office of the CTO, whose mission is to explore the unknown and non-existent aspects of technology and software in order to build a map of GitHub’s future. Jason was previously Senior Vice President of Technology at GitHub, where he has played an integral role in scaling the Engineering, Product, and Security Teams, and building GitHub’s product roadmap to fit the needs of developers around the world.Prior to joining GitHub in 2017, Jason was Vice President of Engineering at Heroku. Before Heroku, Jason oversaw Product Engineering for Ubuntu Desktop and Ubuntu Phone at Canonical. Jason is passionate about building technologies that bring people together, and he’s an active speaker, writer, and advisor.',
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
    bio: `
		  <p>
			Erich is a Microsoft Technical Fellow and is currently working on Visual Studio Code. In
			the past he contributed to Design Patterns, JUnit, Eclipse, and IBM’s Rational Team
			Concert. He works in Zurich and skis in Andermatt, Switzerland.
		  </p>
	  `,
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
    abstract: `
		<div>
		  <p>
			<strong>Trapped in the Open Source Supply Chain</strong>
		  </p>
		  <p>
			Let us talk about the perspective of open source projects as dependencies. As someone in
			the middle of it, I just wanted to share some thoughts on taking what is considered
			largely a hobby and going the donation route. What are maintainers free to work on, what
			is the lifecycle of a project, what is worth funding anyway?
		  </p>
		</div>
	  `
  },
  {
    name: 'Jean Yang',
    company: 'Akita Software',
    title: 'Founder and CEO',
    image: {
      url: 'jean-yang.jpeg'
    },
    bio: `
		  <p>
			Jean Yang (
			<a href="https://twitter.com/jeanqasaur" target="_blank">
			  @jeanqasaur
			</a>
			) is the founder and CEO of <a href="https://www.akitasoftware.com/" target="_blank">
			  Akita Software
			</a>
			, a developer tools company that is bringing structure to observability. Previously, Jean
			was a professor of Computer Science at Carnegie Mellon University. Jean has a PhD from
			MIT, holds software tools patents from work at Microsoft Research and Facebook, and was
			selected as one of the MIT Technology Review's 35 Innovators Under 35 in 2016.
		  </p>
		`,
    twitter: 'jeanqasaur',
    linkedin: 'jean-yang-96575030',
    github: 'jeanqasaur',
    abstract: `
		<div>
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
		</div>
	  `
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
    abstract: `
		<div>
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
		</div>
	  `
  },
  {
    name: 'Ellen Chisa',
    company: 'Darklang',
    title: 'Founder',
    image: {
      url: 'ellen-chisa.jpeg'
    },
    bio: `
		<p>
		  Ellen Chisa is founder-in-residence at Boldstart, a first check VC for technical founders.
		  Previously, she cofounded Dark (
		  <a href="https://darklang.com" target="_blank">
			https://darklang.com
		  </a>
		  ), a programming language tightly integrated to its editor and infrastructure.
		</p>
	  `,
    twitter: 'ellenchisa',
    linkedin: 'ellenchisa',
    github: 'ellenchisa',
    abstract: `
		<div>
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
		</div>
	  `
  },
  {
    name: 'Josh Long',
    company: 'VMware',
    title: 'Spring Developer Advocate',
    image: {
      url: 'josh-long.jpeg'
    },
    bio: `
		<div>
		  <a href="https://twitter.com/starbuxman" target="_blank">
			Josh (@starbuxman)
		  </a>
		  has been the first Spring Developer Advocate since 2010. Josh is a Java Champion, author of
		  6 books (including O'Reilly's 
		  <a
			href="https://www.amazon.com/Cloud-Native-Java-Designing-Resilient/dp/1449374646"
			target="_blank"
		  >
			"Cloud Native Java: Designing Resilient Systems with Spring Boot, Spring Cloud, and Cloud
			Foundry"
		  </a>
		  and
		  <a href="https://reactivespring.io/" target="_blank">
			"Reactive Spring"
		  </a>
		  ) and numerous best-selling video training (including 
		  <a
			href="https://www.oreilly.com/library/view/building-microservices-with/9780134192468/"
			target="_blank"
		  >
			"Building Microservices with Spring Boot Livelessons"
		  </a>
		  with Spring Boot co-founder Phil Webb), and an open-source contributor (Spring Boot, Spring
		  Integration, Spring Cloud, Activiti and Vaadin, etc), a podcaster ("
		  <a href="https://bootifulpodcast.fm/" target="_blank">
			A Bootiful Podcast
		  </a>
		  ") and a YouTuber.
		</div>
	  `,
    twitter: 'starbuxman',
    linkedin: 'joshlong',
    github: 'joshlong',
    abstract: `
		<div>
		  <p>
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
		</div>
	  `
  },
  {
    name: 'Shanea Leven',
    company: 'CodeSee',
    title: 'Founder & CEO',
    image: {
      url: 'shanea-leven.jpeg'
    },
    bio: `
		<p>
		  Shanea is the co-founder and CEO of a developer platform called 
		  <a href="https://www.codesee.io/" target="_blank">
			CodeSee.io
		  </a>
		  . CodeSee shows you how your code works. CodeSee helps developers to deeply understand how
		  your large-scale codebase works, document it, and collaborate continuously. Shanea has spent
		  many years as a product leader building platforms for developers at Google, Docker, eBay,
		  Cloudflare and most recently she was VP of product at Lob. She studied Computer Science and
		  Business.
		</p>
	  `,
    twitter: 'shanealeven',
    linkedin: 'shaneak',
    github: '',
    abstract: `
		<div>
		  <p>
			<strong>Internal DevX Experience is broken… and you should be pissed</strong>
		  </p>
		  <p>
			Our day to day developer experience is filled with practices that are inefficient, panic
			ridden and just down-right an utter slog. Let's talk about how we can create a more
			delightful daily experience by shifting our perspective from just in time understanding to
			continuous code understanding.
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>DevX: History of Code Search</strong>
		  </p>
		  <p>
			What is code search? Code search is an important dev tool for some of the largest and most
			highly respected companies and open-source organizations, but many developers have never
			used it before. We'll go over the history and evolution of code search, why it's becoming
			more popular now, and how it might help you and your collaborators become a better team of
			software engineers.
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
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
		</div>
	  `
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
    abstract: `
		<div>
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
		</div>
	  `
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
    abstract: `
		<div>
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
		</div>
	  `
  },
  {
    name: 'Anurag Goel',
    company: 'Render',
    title: 'Founder & CEO',
    image: {
      url: 'anurag-goel.jpeg'
    },
    bio: `
		<p>
		  Anurag Goel is the founder and CEO of Render (
		  <a href="https://render.com" target="_blank">
			https://render.com
		  </a>
		  ), a modern cloud built for developers. He was previously the 8th employee and the Head of
		  Risk at Stripe.
		</p>
	  `,
    twitter: 'anuraggoel',
    linkedin: 'anuragoel',
    github: 'anurag',
    abstract: `
		<div>
		  <p>
			<strong>DevX in the Internet Age: One Step Forward, Two Steps Back</strong>
		  </p>
		  <p>
			Building and hosting applications has both evolved and devolved since the dawn of the
			Internet. We'll run through the history of DX, from CGI hosting in the nineties to what we
			can look forward to in the new decade.
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>The story of GitHub1s - speed & familiarity matters</strong>
		  </p>
		  <p>
			Almost everyone knows VS Code and probably has tried it. With GitHub1s, you can use VS
			Code as a web app to browse open source codes without cloning the repo. And even switch to
			a PR or a tag to see the changed files side by side. We will share how GitHub1s achieves
			this and what open source community means to us.
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>Simplifying the Journey of Your Containerized Application from Dev to Production</strong>
		  </p>
		  <p>
			Creating a containerized application PoC is deceptively simple. Making it production ready is a lot of work though. This talk will cover what’s necessary to have a production ready containerized application and the steps to get there. We’ll explore the best practices and gotchas containerizing applications. We’ll also compare creating production ready containers the hard way and the easy way.
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
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
		</div>
	  `
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
    abstract: `
		<div>
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
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>
			  How to prioritize dev experience in the development process above all else
			</strong>
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
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
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
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
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>The developer experience gap</strong>
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>
			  How to prioritize dev experience in the development process above all else
			</strong>
		  </p>
		</div>
	  `
  },
  {
    name: 'Borja Burgos',
    company: 'Datadog',
    title: 'Director of Product',
    image: {
      url: 'bojra-burgos.jpeg'
    },
    bio: `
		<p>
		  Borja Burgos is a DevEx-obsessed entrepreneur and technologist. In 2013 he co-founded Tutum
		  – a platform for developers to build and run their Docker applications. After Tutum's
		  acquisition by Docker in 2015, Borja relentlessly continued working on new tools and
		  services to delight developers, from their local desktops to their cloud environments.
		  Disappointed with the complexity, and lack of visibility, in modern-day testing and
		  continuous integration workflows he left Docker to co-founded Undefined Labs, makers of
		  <a href="https://scope.dev/" target="_blank">
			Scope
		  </a>
		  and
		  <a href="https://ctr.run/" target="_blank">
			ctr.run
		  </a>
		  . Now as part of Datadog, Borja and the rest of the
		  <a href="https://undefinedlabs.com/" target="_blank">
			Undefined Labs
		  </a>
		  team are building the next generation of developer-centric observability tools!
		</p>
	  `,
    twitter: 'borja_burgos',
    linkedin: 'borjaburgos',
    github: 'borjaburgos',
    abstract: `
		<div>
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
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>Ephemeral Development Environments</strong>
		  </p>
		  <p>
			Local, long-lived development environments are what we are used to. We spend effort to
			configure and nurture them, which takes time away from more important tasks. In this talk,
			Mike and Anton introduce the concept of ephemeral development environments, their benefits
			and how you can get started right away too.
		  </p>
		</div>
	  `
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
    abstract: `
		<div>
		  <p>
			<strong>Ephemeral Development Environments</strong>
		  </p>
		  <p>
			Local, long-lived development environments are what we are used to. We spend effort to
			configure and nurture them, which takes time away from more important tasks. In this talk,
			Mike and Anton introduce the concept of ephemeral development environments, their benefits
			and how you can get started right away too.
		  </p>
		</div>
	  `
  },
  {
    name: 'Ahmad Awais',
    company: 'RapidAPI',
    title: 'Head of Developer Relations ',
    image: {
      url: 'ahmad-awais.jpeg'
    },
    bio: `<div>
		<p>
		  <a href="https://twitter.com/MrAhmadAwais/" target="_blank">Ahmad Awais</a> is an <a href="https://www.linkedin.com/feed/update/urn:li:activity:6790272195416350720/" target="_blank">award-winning</a> open-source engineer​,​ Head of Developer Relations at <a href="https://rapidapi.com/company/about/" target="_blank">RapidAPI</a>, Google Developers Expert ​Dev Advocate, Node.js Community Committee Outreach Lead, WordPress Core​ Dev​, and ex VP ​of ​Engineering​​ at WGA. He has authored various open-source software tools used by millions of developers worldwide, like his <a href="https://ShadesOfPurple.pro/more" target="_blank">Shades of Purple</a> code-theme​ or projects like the​ <a href="https://github.com/AhmadAwais/corona-cli" target="_blank">corona-cli</a>​.
		</p>
		<p>
		  ​Awais ​loves to teach. Over 20,000 developers are learning from his courses ​, i.e., <a href="https://NodeCLI.com/?utm_medium=referral&amp;utm_campaign=speaking" target="_blank">NodeCLI.com</a>, <a href="https://VSCode.pro/?utm_medium=referral&amp;utm_campaign=speaking" target="_blank">VSCode.pro</a>,​ <a href="https://NextjsBeginner.com/?utm_medium=referral&amp;utm_campaign=speaking" target="_blank">NextjsBeginner.com</a>​​. He has spoken at 100+ tech conferences, including TEDx, ReactLive, Node Summit, Google Dev Summit, Next.js Conf. ​Awais received the FOSS community leadership recognition as one of the first 12 featured <a href="https://ahmadawais.com/github-stars/" target="_blank">GitHub Star</a> with a gold <a href="https://www.linkedin.com/feed/update/urn:li:activity:6790272195416350720/" target="_blank">GitHub Stars Award</a>. ​He is a member of the SmashingMagazine Experts Panel; featured &amp; published author at CSS-Tricks, Tuts+, Scotch.io, SitePoint. You can mostly find ​him on Twitter <a href="https://twitter.com/MrAhmadAwais/" target="_blank">@MrAhmadAwais</a>, where he tweets his <a href="https://Awais.dev/odmt" target="_blank">#OneDevMinute</a> developer tips.
		​</p>
	  </div>`,
    twitter: 'MrAhmadAwais',
    linkedin: 'mrahmadawais',
    github: 'ahmadawais',
    abstract: `<div>
		<p>VSCode Power User Tips & Tricks</p>
		<p>
		After 10 years with Sublime Text, I switched to VSCode — the new open-source cross-platform editor everyone's talking about. I've spent over 1,000 hours perfecting my setup to help you switch today. In this talk, you'll get to learn tens of VSCode Power User workflows that'll help you save time and code more efficiently. Text manipulation to multi-cursors and even Markdown tips/tricks. You name it.
		</p>
	  </div>`
  }
];

const stringToBeautifiedFragment = (str = '') =>
  str.toLocaleLowerCase().replace(/\s/g, '-').replace(/\?/g, '').replace(/,/g, '');

const getSpeakerByName = (name: string, speakers: Speaker[] = speakers2021) =>
  speakers.find(s => s.name.toLowerCase() === name.toLowerCase());

export const isEurope = () => {
  const offset = new Date().getTimezoneOffset();
  return offset <= 0 && offset >= -180;
};

const stages2022: Stage[] = [
  {
    name: 'Stage A',
    day: 'Monday, May 2',
    discord: '',
    slug: 'a',
    stream: 'Qecr3TQk87Q',
    schedule: [
      {
        title: 'Welcome to DevX Conf!',
        scheduleOrder: 1,
        description: '',
        start: {
          cest: '5:00 PM',
          pt: '8:00 AM'
        },
        end: {
          cest: '5:15 PM',
          pt: '8:15 AM'
        },
        ytId: 'Qecr3TQk87Q',
        speaker: [
          // @ts-ignore
          getSpeakerByName('Michael Aring', hosts2022),
          //@ts-ignore
          getSpeakerByName('Pauline Narvas', hosts2022)
        ]
      },
      {
        title: 'Panel: Remote development',
        scheduleOrder: 2,
        description: '',
        start: {
          cest: '5:15 PM',
          pt: '8:15 AM'
        },
        end: {
          cest: '6:00 PM',
          pt: '9:00 AM'
        },
        ytId: 'tWZ6VunABws',
        speaker: 'Kirill Skrygan, Christian Weichel, Nik Molnar, Christof Marti, Johannes Landgraf'
      },
      {
        title: 'Maybe Its Time to Rethink How Youve Been Developing?',
        scheduleOrder: 3,
        description: '',
        start: {
          cest: '6:00 PM',
          pt: '9:00 AM'
        },
        end: {
          cest: '6:30 PM',
          pt: '9:30 AM'
        },
        ytId: 'FRmv-IS-7ow',

        speaker: [
          // @ts-ignore
          getSpeakerByName('Ramiro Berrelleza', speakers2022),
          // @ts-ignore
          getSpeakerByName('Arsh Sharma', speakers2022)
        ]
      },
      {
        title: 'Implementation and use cases of modern rendering patterns',
        scheduleOrder: 4,
        description: '',
        start: {
          cest: '6:30 PM',
          pt: '9:30 AM'
        },
        end: {
          cest: '7:00 PM',
          pt: '10:00 AM'
        },
        ytId: 'RHFlQnug3bk',
        // @ts-ignore
        speaker: getSpeakerByName('Lydia Hallie', speakers2022)
      },
      {
        title: 'Fig: Autocomplete for the Terminal',
        scheduleOrder: 5,
        description: '',
        start: {
          cest: '7:00 PM',
          pt: '10:00 AM'
        },
        end: {
          cest: '7:30 PM',
          pt: '10:30 AM'
        },
        ytId: 'VhxGX8MV3Vw',
        // @ts-ignore
        speaker: getSpeakerByName('Brendan Falk', speakers2022)
      },
      {
        title: 'The Next Generation of Developer-First Products',
        scheduleOrder: 6,
        description: '',
        start: {
          cest: '7:30 PM',
          pt: '10:30 AM'
        },
        end: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        ytId: 'ja-Pr58FCIQ',
        speaker: getSpeakerByName('Zeno Rocha', speakers2022)
      },
      {
        title: 'Building DevX Teams, my story',
        scheduleOrder: 7,
        description: '',
        start: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        end: {
          cest: '9:00 PM',
          pt: '12:00 PM'
        },
        ytId: 'xX5zeVy8Ta4',
        speaker: getSpeakerByName('Cirpo Cinelli', speakers2022)
      },
      {
        title: 'Code Reviews is more than a crushing Developer Experience',
        scheduleOrder: 23,
        description: '',
        start: {
          cest: '9:00 PM',
          pt: '12:00 AM'
        },
        end: {
          cest: '9:30 PM',
          pt: '12:30 PM'
        },
        ytId: 'fy-mrkOMm0M',
        // 	// @ts-ignore
        speaker: getSpeakerByName('Shanea Leven', speakers2022)
      },
      {
        title: 'Conclude Day 1',
        scheduleOrder: 9,
        description: '',
        start: {
          cest: '9:30 PM',
          pt: '12:30 PM'
        },
        end: {
          cest: '9:40 PM',
          pt: '12:40 PM'
        },
        ytId: 'ZINFt0QQlkg',
        speaker: [
          // @ts-ignore
          getSpeakerByName('Michael Aring', hosts2022),
          // @ts-ignore
          getSpeakerByName('Pauline Narvas', hosts2022)
        ]
      }
    ]
  },
  {
    name: 'Stage A',
    day: 'Tuesday, May 3',
    discord: '',
    slug: 'a',
    stream: 'Qecr3TQk87Q',
    schedule: [
      {
        title: 'Welcome to DevX Conf Day 2!',
        scheduleOrder: 10,
        description: '',
        start: {
          cest: '5:00 PM',
          pt: '8:00 AM'
        },
        end: {
          cest: '5:15 PM',
          pt: '8:15 AM'
        },
        ytId: 'vSUsXkew3X0',
        speaker: [
          // @ts-ignore
          getSpeakerByName('Michael Aring', hosts2022),
          // @ts-ignore
          getSpeakerByName('Pauline Narvas', hosts2022)
        ]
      },
      {
        title: 'Panel: DevX Past and Future',
        scheduleOrder: 12,
        description: '',
        start: {
          cest: '5:15 PM',
          pt: '8:15 AM'
        },
        end: {
          cest: '6:00 PM',
          pt: '9:00 AM'
        },
        ytId: 'JmdUac950kk',
        speaker: 'Chad Metcalf, Andrea Luzzardi, Arnaud Porterie, Ben Firshman '
      },
      {
        title: 'Remote development in a remote-first world',
        scheduleOrder: 29,
        description: '',
        start: {
          cest: '6:00 PM',
          pt: '9:00 AM'
        },
        end: {
          cest: '6:45 PM',
          pt: '9:45 AM'
        },
        ytId: 'pxJ1dgzn7vY',
        speaker: getSpeakerByName('Tarun Pothulapati', speakers2022)
      },
      {
        title: 'The balancing act of delivering high-quality DX',
        scheduleOrder: 13,
        description: '',
        start: {
          cest: '6:45 PM',
          pt: '9:45 AM'
        },
        end: {
          cest: '7:15 PM',
          pt: '10:15 AM'
        },
        ytId: '8M0XYCN5Bn8',
        speaker: getSpeakerByName('Victor Savkin', speakers2022)
      },
      {
        title: 'How Spotify engineers use Backstage daily and keep their lives simple',
        scheduleOrder: 14,
        description: '',
        start: {
          cest: '7:15 PM',
          pt: '10:15 AM'
        },
        end: {
          cest: '7:45 PM',
          pt: '10:45 AM'
        },
        ytId: 'YswvyxUQvPw',
        speaker: getSpeakerByName('Himanshu Mishra', speakers2022)
      },
      {
        title: 'Remote development can improve your developers’ remote work experience',
        scheduleOrder: 15,
        description: '',
        start: {
          cest: '7:45 PM',
          pt: '10:45 AM'
        },
        end: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        ytId: 'FLxeKNLjfKU',
        speaker: getSpeakerByName('Maya Kaczorowski', speakers2022)
      },
      {
        title: 'Zed: Collaborative coding at the speed of light',
        scheduleOrder: 16,
        description: '',
        start: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        end: {
          cest: '9:00 PM',
          pt: '12:00 PM'
        },
        ytId: 'wXT73bBr83s',
        speaker: getSpeakerByName('Nathan Sobo', speakers2022)
      },
      {
        title: 'Designing for developers',
        scheduleOrder: 17,
        description: '',
        start: {
          cest: '9:00 PM',
          pt: '12:00 PM'
        },
        end: {
          cest: '9:30 PM',
          pt: '12:30 PM'
        },
        ytId: '-oSb5GUyUFo',
        speaker: getSpeakerByName('Boris Kirov', speakers2022)
      },
      {
        title: 'End of DevX Conf 2022!',
        scheduleOrder: 18,
        description: '',
        start: {
          cest: '9:30 PM',
          pt: '12:30 PM'
        },
        end: {
          cest: '9:40 PM',
          pt: '12:40 PM'
        },
        ytId: 'Bv6z8nE7Z-M',
        speaker: [
          // @ts-ignore
          getSpeakerByName('Michael Aring', hosts2022),
          // @ts-ignore
          getSpeakerByName('Pauline Narvas', hosts2022)
        ]
      }
    ]
  },
  {
    name: 'Stage B',
    day: 'Monday, May 2',
    discord: '',
    slug: 'b',
    stream: 'Qecr3TQk87Q',
    schedule: [
      {
        title: 'The Radiating Circles of DevX',
        scheduleOrder: 18,
        description: '',
        start: {
          cest: '6:00 PM',
          pt: '9:00 AM'
        },
        end: {
          cest: '6:30 PM',
          pt: '9:30 AM'
        },
        ytId: 'd9lo-Ej98l4',
        // @ts-ignore
        speaker: getSpeakerByName('Shawn Wang', speakers2022)
      },
      {
        title: 'Peer Learning: Your developer adoption safety net',
        scheduleOrder: 19,
        description: '',
        start: {
          cest: '6:30 PM',
          pt: '9:30 AM'
        },
        end: {
          cest: '7:00 PM',
          pt: '10:00 AM'
        },
        ytId: 'bmsZGT151ys',
        // @ts-ignore
        speaker: getSpeakerByName('Ana Hevesi', speakers2022)
      },
      {
        title:
          'Developer Experience and Product-Led Growth (PLG) - how they enable each other and your developer community, seamlessly',
        scheduleOrder: 20,
        description: '',
        start: {
          cest: '7:00 PM',
          pt: '10:00 AM'
        },
        end: {
          cest: '7:45 PM',
          pt: '10:45 AM'
        },
        ytId: 'uJ58xT4NWA8',
        // @ts-ignore
        speaker: getSpeakerByName('Amara Graham', speakers2022)
      },
      {
        title: 'How the Supabase architecture enables "Supa"-DX',
        scheduleOrder: 8,
        description: '',
        start: {
          cest: '7:45 PM',
          pt: '10:45 AM'
        },
        end: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        ytId: '1Tz0FBoqCTQ',
        speaker: getSpeakerByName('Inian Parameshwaran', speakers2022)
      },
      {
        title: 'Make a world-class integration testing library',
        scheduleOrder: 22,
        description: '',
        start: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        end: {
          cest: '9:00 PM',
          pt: '12:00 PM'
        },
        ytId: 'A_I8_3UFHo0',
        // @ts-ignore
        speaker: getSpeakerByName('Oleg Šelajev', speakers2022)
      }
    ]
  },
  {
    name: 'Stage B',
    day: 'Tuesday, May 3',
    discord: '',
    slug: 'b',
    stream: 'Qecr3TQk87Q',
    schedule: [
      {
        title: 'TDD and the Terminator - An introduction to Test Driven Development',
        scheduleOrder: 24,
        description: '',
        start: {
          cest: '6:00 PM',
          pt: '9:00 AM'
        },
        end: {
          cest: '6:45 PM',
          pt: '9:45 AM'
        },
        ytId: 'ukIQqIdZUvY',
        speaker: getSpeakerByName('Layla Porter', speakers2022)
      },
      {
        title: 'Warp and the future of the terminal',
        scheduleOrder: 25,
        description: '',
        start: {
          cest: '6:45 PM',
          pt: '9:45 AM'
        },
        end: {
          cest: '7:15 PM',
          pt: '10:15 AM'
        },
        ytId: 'EFbicktk6C4',
        speaker: getSpeakerByName('Zach Lloyd', speakers2022)
      },
      {
        title: 'Progressive Delivery with Observability',
        scheduleOrder: 26,
        description: '',
        start: {
          cest: '7:15 PM',
          pt: '10:15 AM'
        },
        end: {
          cest: '7:45 PM',
          pt: '10:45 AM'
        },
        ytId: 'OQ0qyGap60w',
        speaker: getSpeakerByName('Alayshia Knighten', speakers2022)
      },
      {
        title: 'What does it mean to create API products at scale?',
        scheduleOrder: 27,
        description: '',
        start: {
          cest: '7:45 PM',
          pt: '10:45 AM'
        },
        end: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        ytId: '-6IinBFPKn4',
        speaker: getSpeakerByName('Michael Bleigh', speakers2022)
      },
      {
        title: 'How to onboard people in a day',
        scheduleOrder: 28,
        description: '',
        start: {
          cest: '8:15 PM',
          pt: '11:15 AM'
        },
        end: {
          cest: '9:15 PM',
          pt: '12:15 PM'
        },
        ytId: 'mDpSVbEjEtw',
        speaker: getSpeakerByName('Wilson Mar', speakers2022)
      }
    ]
  }
];

const stages2021: Stage[] = [
  {
    name: 'Stage A',
    day: 'Wednesday, April 28',
    discord: '',
    slug: 'a',
    stream: 'aI-L72XGznU',
    schedule: [
      {
        title: 'Intro',
        scheduleOrder: 1,
        description: '',
        start: {
          cest: '17:00 PM',
          pt: '8:00 AM'
        },
        end: {
          cest: '17:10 PM',
          pt: '8:10 AM'
        },
        ytId: 'aI-L72XGznU',
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
        ]
      },
      {
        title: 'The evolution of DevX - An interview with Erich Gamma',
        scheduleOrder: 2,
        description: '',
        start: {
          cest: '17:10 PM',
          pt: '8:10 AM'
        },
        end: {
          cest: '17:40 PM',
          pt: '8:40 AM'
        },
        ytId: 'JiBUDS9odA8',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [
          // @ts-ignore
          getSpeakerByName('Erich Gamma'),
          {
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
          }
        ]
      },
      {
        title: "Is DevEx not good… because we don't want it to be?",
        scheduleOrder: 4,
        description: '',
        start: {
          cest: '18:00 PM',
          pt: '9:00 AM'
        },
        end: {
          cest: '18:20 PM',
          pt: '9:20 AM'
        },
        ytId: 'nPO4QL0Q85s',
        speaker: getSpeakerByName('Ellen Chisa')
      },
      {
        title: 'DevX at Heroku and GitHub - An interview with Jason Warner',
        scheduleOrder: 6,
        description: '',
        start: {
          cest: '18:40 PM',
          pt: '9:40 AM'
        },
        end: {
          cest: '19:00 PM',
          pt: '10:00 AM'
        },
        ytId: 'SddUEk878jM',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [
          // @ts-ignore
          getSpeakerByName('Jason Warner'),
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
          }
        ]
      },
      {
        title: 'Internal DevX Experience is broken… and you should be pissed',
        scheduleOrder: 8,
        description: '',
        start: {
          cest: '19:20 PM',
          pt: '10:20 AM'
        },
        end: {
          cest: '19:40 PM',
          pt: '10:40 AM'
        },
        ytId: 'N6XkqbNKxQA',
        speaker: getSpeakerByName('Shanea Leven')
      },
      {
        title: 'Find friction in your developer experience by user testing with developers',
        scheduleOrder: 10,
        description: '',
        start: {
          cest: '20:00 PM',
          pt: '11:00 AM'
        },
        end: {
          cest: '20:20 PM',
          pt: '11:20 AM'
        },
        ytId: 'Dn6-See4wfk',
        speaker: getSpeakerByName('Ian Jennings')
      },
      {
        title: 'The developer experience gap',
        scheduleOrder: 12,
        description: '',
        start: {
          cest: '20:40 PM',
          pt: '11:40 AM'
        },
        end: {
          cest: '21:00 PM',
          pt: '12:00 PM'
        },
        // start: isEurope() ? '20:40' : '11:40 AM',
        // end: isEurope() ? '21:00' : '12:00 PM',
        ytId: 'Z6O13JQOmiQ',
        speaker: getSpeakerByName("Stephen O'Grady")
      }
    ]
  },
  {
    name: 'Stage A',
    day: 'Thursday, April 29',
    discord: '',
    slug: 'a',
    stream: 'aI-L72XGznU',
    schedule: [
      {
        title: 'VSCode Power User Tips & Tricks',
        scheduleOrder: 14,
        description: '',
        start: {
          cest: '16:40 PM',
          pt: '7:40 AM'
        },
        end: {
          cest: '17:00 PM',
          pt: '8:00 AM'
        },
        // start: isEurope() ? '16:40' : '7:40 AM',
        // end: isEurope() ? '17:00' : '8:00 AM',
        ytId: 'M6E5L1-TVoc',
        speaker: getSpeakerByName('Ahmad Awais')
      },
      {
        title: 'Streamlining Firebase Development with local Emulators',
        scheduleOrder: 16,
        description: '',
        start: {
          cest: '17:20 PM',
          pt: '8:20 AM'
        },
        end: {
          cest: '17:40 PM',
          pt: '8:40 AM'
        },
        ytId: '0AXj96IXueg',
        speaker: getSpeakerByName('Rachel Myers')
      },
      {
        title: 'The story of GitHub1s - speed & familiarity matters',
        scheduleOrder: 18,
        description: '',
        start: {
          cest: '18:00 PM',
          pt: '9:00 AM'
        },
        end: {
          cest: '18:20 PM',
          pt: '9:20 AM'
        },
        ytId: '6Xyg6yQe2rk',
        speaker: getSpeakerByName('Yihong Cheng')
      },
      {
        title: 'Trapped in the open source supply chain',
        scheduleOrder: 20,
        description: '',
        start: {
          cest: '18:40 PM',
          pt: '9:40 AM'
        },
        end: {
          cest: '19:00 PM',
          pt: '10:00 AM'
        },
        ytId: '0wRUU0ln9-0',
        speaker: getSpeakerByName('Henry Zhu')
      },
      {
        title: 'DevX in the Internet Age: One Step Forward, Two Steps Back',
        scheduleOrder: 22,
        description: '',
        start: {
          cest: '19:20 PM',
          pt: '10:20 AM'
        },
        end: {
          cest: '19:40 PM',
          pt: '10:40 AM'
        },
        ytId: 'asA7rE0mDeo',
        speaker: getSpeakerByName('Anurag Goel')
      },
      {
        title: 'How to build a dApp',
        scheduleOrder: 24,
        description: '',
        start: {
          cest: '20:00 PM',
          pt: '11:00 AM'
        },
        end: {
          cest: '20:20 PM',
          pt: '11:20 AM'
        },
        // start: isEurope() ? '20:00' : '11:00 AM',
        // end: isEurope() ? '20:20' : '11:20 AM',
        ytId: 'Ks9_hTXwh2o',
        speaker: getSpeakerByName('Nader Dabit')
      },
      {
        title: 'How to prioritize dev experience in the development process above all else',
        scheduleOrder: 26,
        description: '',
        start: {
          cest: '20:40 PM',
          pt: '11:40 AM'
        },
        end: {
          cest: '21:00 PM',
          pt: '12:00 PM'
        },
        ytId: 'lWF_PNqyiE8',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [getSpeakerByName('Tuomas Artman'), getSpeakerByName('Thomas Paul Mann')]
      }
    ]
  },
  {
    name: 'Stage B',
    day: 'Wednesday, April 28',
    discord: '',
    slug: 'b',
    stream: 'aI-L72XGznU',
    schedule: [
      {
        title: 'Using Observability to improve the Developer Experience',
        scheduleOrder: 3,
        description: '',
        start: {
          cest: '17:40 PM',
          pt: '8:40 AM'
        },
        end: {
          cest: '18:00 PM',
          pt: '9:00 AM'
        },
        ytId: '8LlM0knBuLQ',
        speaker: getSpeakerByName('Borja Burgos')
      },
      {
        title: 'Monorepos, are they right for you?',
        scheduleOrder: 5,
        description: '',
        start: {
          cest: '18:20 PM',
          pt: '9:20 AM'
        },
        end: {
          cest: '18:40 PM',
          pt: '9:40 AM'
        },
        ytId: 'G3yIAS4NShk',
        speaker: getSpeakerByName('Maël Nison')
      },
      {
        title: 'Cloud native Java',
        scheduleOrder: 7,
        description: '',
        start: {
          cest: '19:00 PM',
          pt: '10:00 AM'
        },
        end: {
          cest: '19:20 PM',
          pt: '10:20 AM'
        },
        ytId: 'oq5FcnqEMxk',
        speaker: getSpeakerByName('Josh Long')
      },
      {
        title: 'Infrastructure security, visibility and cost-optimization',
        scheduleOrder: 9,
        description: '',
        start: {
          cest: '19:40 PM',
          pt: '10:40 AM'
        },
        end: {
          cest: '20:00 PM',
          pt: '11:00 AM'
        },
        ytId: 'AizWSieYRGk',
        speaker: getSpeakerByName('Yevgeny Pats')
      },
      {
        title: 'Ephemeral Development Environments',
        scheduleOrder: 11,
        description: '',
        start: {
          cest: '20:20 PM',
          pt: '11:20 AM'
        },
        end: {
          cest: '20:40 PM',
          pt: '11:40 AM'
        },
        // start: isEurope() ? '20:20' : '11:20 AM',
        // end: isEurope() ? '20:40' : '11:40 AM',
        ytId: 'IXVmjkI7wkc',
        // eslint-disable-next-line
        // @ts-ignore
        speaker: [getSpeakerByName('Mike Nikles'), getSpeakerByName('Anton Kosyakov')]
      },
      {
        title: 'Building a K8s Operator for a Distributed Database',
        scheduleOrder: 13,
        description: '',
        start: {
          cest: '21:00 PM',
          pt: '12:00 PM'
        },
        end: {
          cest: '21:20 PM',
          pt: '12:20 PM'
        },
        ytId: 'VUGBq0ME2Qc',
        speaker: getSpeakerByName('Natalie Pistunovich')
      }
    ]
  },
  {
    name: 'Stage B',
    day: 'Thursday, April 29',
    discord: '',
    slug: 'b',
    stream: 'aI-L72XGznU',
    schedule: [
      {
        title: 'Building Supabase Storage. DevX, performance, security - choose three',
        scheduleOrder: 15,
        description: '',
        start: {
          cest: '17:00 PM',
          pt: '8:00 AM'
        },
        end: {
          cest: '17:20 PM',
          pt: '8:20 AM'
        },
        // start: isEurope() ? '17:00' : '8:00 AM',
        // end: isEurope() ? '17:20' : '8:20 AM',
        ytId: 'YsUYOsq_o7g',
        speaker: getSpeakerByName('Inian Parameshwaran')
      },
      {
        title: 'DevX: history of code search',
        scheduleOrder: 17,
        description: '',
        start: {
          cest: '17:40 PM',
          pt: '8:40 AM'
        },
        end: {
          cest: '18:00 PM',
          pt: '9:00 AM'
        },
        ytId: 'J4lArxTWiIY',
        speaker: getSpeakerByName('Beyang Liu')
      },
      {
        title: 'Why I love incremental delivery and why you should too',
        scheduleOrder: 19,
        description: '',
        start: {
          cest: '18:20 PM',
          pt: '9:20 AM'
        },
        end: {
          cest: '18:40 PM',
          pt: '9:40 AM'
        },
        ytId: 'AnxWXQMauMI',
        speaker: getSpeakerByName('Lili Kastilio')
      },
      {
        title: 'Simplifying the journey of your containerized application from dev to production',
        scheduleOrder: 21,
        description: '',
        start: {
          cest: '19:00 PM',
          pt: '10:00 AM'
        },
        end: {
          cest: '19:20 PM',
          pt: '10:20 AM'
        },
        // start: isEurope() ? '19:00' : '10:00 AM',
        // end: isEurope() ? '19:20' : '10:20 AM',
        ytId: '8iJ_6VUzk1I',
        speaker: getSpeakerByName('Kyle Quest')
      },
      {
        title: 'Make your APIs developer-friendly',
        scheduleOrder: 23,
        description: '',
        start: {
          cest: '19:40 PM',
          pt: '10:40 AM'
        },
        end: {
          cest: '20:00 PM',
          pt: '11:00 AM'
        },
        ytId: 'E-2Eqh99nUw',
        speaker: getSpeakerByName('Aidan Cunniffe')
      },
      {
        title: '"Testing" in prod Isn\'t the only way: why observability needs structure',
        scheduleOrder: 25,
        description: '',
        start: {
          cest: '20:20 PM',
          pt: '11:20 AM'
        },
        end: {
          cest: '20:40 PM',
          pt: '11:40 AM'
        },
        ytId: '0nrd5-9Lf7E',
        speaker: getSpeakerByName('Jean Yang')
      }
    ]
  }
];

write.sync(`${targetPath}/2021/speakers.json`, JSON.stringify(speakers2021));

speakers2021.forEach(speaker => {
  write.sync(
    `${targetPath}/${stringToBeautifiedFragment(speaker.name)}.json`,
    JSON.stringify(speaker)
  );
});

write.sync(`${targetPath}/2021/stages.json`, JSON.stringify(stages2021));

write.sync(`${targetPath}/2022/speakers.json`, JSON.stringify(speakers2022));

write.sync(`${targetPath}/2022/stages.json`, JSON.stringify(stages2022));

speakers2022.forEach(speaker => {
  write.sync(
    `${targetPath}/${stringToBeautifiedFragment(speaker.name)}.json`,
    JSON.stringify(speaker)
  );
});

write.sync(`${targetPath}/2022/hosts.json`, JSON.stringify(hosts2022));

hosts2022.forEach(host => {
  write.sync(`${targetPath}/${stringToBeautifiedFragment(host.name)}.json`, JSON.stringify(host));
});
