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
import SponsorSection from '@components/sponsor-section';
import { hyphenate } from '@components/speakers-grid';
import { sponsors } from 'contents/expo';
import { useRouter } from 'next/router';

export default function SponsorPage() {
  const slug = useRouter().query.slug;
  const sponsor = sponsors.find(s => hyphenate(s.name) === slug);

  const meta = {
    title: `Sponsor ${sponsor?.name} | Devx Conf`,
    description: META_DESCRIPTION
  };



  return (
    <Page meta={meta}>
      <Layout layoutStyles={{marginTop: `var(--gutter-huge)`}}>
        <div className="row">
          <BackLink href="/expo" destinationText="Expo"/>
          {
            undefined !== sponsor ? 
            (
              <SponsorSection sponsor={sponsor} />
            )
            : null
          }
        </div>
      </Layout>
    </Page>
  );
}
