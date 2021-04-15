import Imprint from '@components/pages/imprint';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';

export default function Conf() {
  const meta = {
    title: 'Imprint | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Imprint />
    </Page>
  );
}
