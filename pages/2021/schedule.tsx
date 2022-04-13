import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import Schedule from '@components/schedule';

export default function Conf({stages}: any) {
  const meta = {
    title: 'Schedule | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
        <Schedule allStages={stages} />
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