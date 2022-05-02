import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import Schedule from '@components/schedule';
import { isEurope } from 'utils/helpers';

export default function Conf({ stages }: any) {
  const meta = {
    title: 'Schedule | DevX Conf',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta} fullViewport>
      <Schedule
        intro={
          <>
            The conference starts May 2nd {isEurope() ? '5:00 PM CEST' : '8:00 AM PT'}.
          </>
        }
        allStages={stages}
      />
    </Page>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`https://devxconf.org/json/2022/stages.json`);
  const stages = await req.json();

  return {
    props: { stages }
  };
}
