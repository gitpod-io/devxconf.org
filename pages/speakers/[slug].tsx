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

import BackLink from '@components/backlink';
import Layout from '@components/layout';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import { PatternHalfCircle } from '@components/patterns';
import SpeakerSection from '@components/speaker-section';
import styles from './[slug].module.css';

export default function SponsorPage({speaker}: any) {
   // eslint-disable-next-line @typescript-eslint/no-unsafe-call

  const meta = {
    title: `${speaker?.name} Speaker | Devx Conf`,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout layoutStyles={{ marginTop: `var(--gutter-huge)` }}>
        <div className="row">
          <BackLink href="/#speakers" destinationText="Speakers" />
          {undefined !== speaker ? <SpeakerSection speaker={speaker} /> : null}
        </div>
        <PatternHalfCircle
          className={styles.pattern}
          isInverted={true}
          styles={{
            position: 'absolute',
            bottom: 100,
            right: '-80px',
            height: '200px'
          }}
        />
      </Layout>
    </Page>
  );
}

export async function getServerSideProps({params}: any) {
  const req = await fetch(`https://devxconf.org/json/${encodeURIComponent(params.slug)}.json`);
  const speaker = await req.json();

  return {
      props: { speaker },
  }
}