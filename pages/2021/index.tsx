import { SITE_NAME, META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import Layout from '@components/layout';
import StageContainer from '@components/stage-container';
import { Stage } from '@lib/types';

export default function Conf({stages}: {stages: Stage[]}) {
  const meta = {
    title: `${SITE_NAME} 2021`,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <StageContainer stages={stages} />
      </Layout>
    </Page>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`https://devxconf.org/json/2021/stages.json`);
  const stages = await req.json();

  return {
      props: { stages },
  }
}