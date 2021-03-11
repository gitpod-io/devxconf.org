import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import Schedule from '@components/schedule';
import { allStages } from 'contents/schedule-and-stage';

export default function Conf() {
  const meta = {
    title: 'Schedule | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
        <Schedule allStages={allStages} />
    </Page>
  );
}
