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
import StageContainer from '@components/stage-container';

export default function Conf({stages}: any) {
  const meta = {
    title: SITE_NAME,
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <StageContainer stages={stages} isNew={true} />
      </Layout>
    </Page>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`https://devxconf.org/json/2022/stages.json`);
  const stages = await req.json();

  return {
      props: { stages },
  }
}