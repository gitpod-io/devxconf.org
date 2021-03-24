import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import PrivacyPolicy from '@components/pages/privacy-policy';

export default function Conf() {
  const meta = {
    title: 'Privacy Policy | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
        <PrivacyPolicy />
    </Page>
  );
}