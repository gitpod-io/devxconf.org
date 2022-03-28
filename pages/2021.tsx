import { SITE_NAME, META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import Layout from '@components/layout';
import StageContainer from '@components/stage-container';

export default function Conf() {
  const meta = {
    title: SITE_NAME,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <StageContainer />
      </Layout>
    </Page>
  );
}