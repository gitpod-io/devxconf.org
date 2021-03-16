import { META_DESCRIPTION } from '@lib/constants';
import Manifest from '@components/pages/manisfest';
import Page from '@components/page';

export default function Conf() {
  const meta = {
    title: 'Manifest | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Manifest />
    </Page>
  );
}
