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

import Header from '@components/header';
import Layout from '@components/layout';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import SponsorsGrid from '@components/sponsors-grid';
import { sponsors } from 'contents/expo';

export default function ExpoPage() {
  const meta = {
    title: 'Expo | Devx Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Partner Exposition" description="Learn more about our conference partners." />
        <SponsorsGrid sponsors={sponsors} />
      </Layout>
    </Page>
  );
}