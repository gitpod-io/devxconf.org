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

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
export const SITE_URL = 'https://devxconf.org';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'DevX';
export const SITE_NAME_MULTILINE = ['DevX', 'Conf'];
export const SITE_NAME = 'DevX Conf';
export const META_DESCRIPTION =
  'DevX Conf is a space for creators where we can start from first principles, collaborate, listen, discuss and declutter our workflows, toolchains and minds. To improve developer experience. To make us feel again like everything is at our fingertips. We want to foster an ecosystem that sparks dialogue and establishes best practices and frameworks across the areas of coding, testing, building, deploying, collaborating on and running software.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'May 2nd - 3rd, 2022';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  // {
  //   name: 'Stage',
  //   route: '/stage/a'
  // },
  // {
  //    name: 'Speakers',
  //    route: '/speakers'
  // },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Manifesto',
    route: '/manifesto'
  },
  {
    name: 'Open-Source Funding',
    route: '/opensource'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Community',
    route: '/community'
  },
  {
    name: "2021",
    route: "/2021/stage/a"
  },
];

export type TicketGenerationState = 'default' | 'loading';
