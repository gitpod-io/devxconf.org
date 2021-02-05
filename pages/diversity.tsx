import Diversity from '@components/pages/diversity';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';

export default function Conf() {
  const meta = {
    title: 'Diversity, Equity & Inclusion - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Diversity />
    </Page>
  );
}
