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

import { SITE_NAME, META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import Layout from '@components/layout';
import Hero from '@components/index/hero';
import SpeakersGrid from '@components/speakers-grid';
import Partners from '@components/index/partners';
import FollowUsOnTwitter from '@components/follow-us-on-twitter';
import About from '@components/about';

export default function Conf({ speakers, hosts }: any) {
  const meta = {
    title: SITE_NAME,
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <Hero />
        <SpeakersGrid
          title="Speakers"
          text="Our speakers deeply care about frictionless developer workflows and leverage automation to solve problems."
          speakers={speakers}
          isFootnoteShown={true}
        />
        <SpeakersGrid 
          title="Your Hosts"
          text='DevX Conf 2022 will be hosted by...'
          type="hosts"
          speakers={hosts}
          styles={{maxWidth: '650px', width: "100%", margin: '0 auto', textAlign: 'center'}}
        />
        <Partners />
        <FollowUsOnTwitter />
        <About />
      </Layout>
    </Page>
  );
}

export async function getServerSideProps() {
  const speakersReq = await fetch(`https://devxconf.org/json/2022/speakers.json`);
  const speakers = await speakersReq.json();
  const hostsReq = await fetch(`https://devxconf.org/json/2022/hosts.json`);
  const hosts = await hostsReq.json();

  return {
    props: { speakers, hosts }
  };
}
