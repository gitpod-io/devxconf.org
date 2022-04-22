import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import Schedule from '@components/schedule';
import { isEurope } from 'utils/helpers';

export default function Conf({stages}: any) {
  const meta = {
    title: 'Schedule 2021 | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
        <Schedule intro={<>The conference starts April 28th {isEurope() ? '17:00 CEST' : '8:00 PT'}.</>} allStages={stages} />
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