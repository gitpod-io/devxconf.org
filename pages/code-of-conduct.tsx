import CodeOfCoduct from '../components/pages/code-of-conduct';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';

export default function Conf() {
  const meta = {
    title: 'Code of Conduct | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
        <CodeOfCoduct />
    </Page>
  );
}
