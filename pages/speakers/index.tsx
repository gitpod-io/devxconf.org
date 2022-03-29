import Layout from '@components/layout';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import SpeakersGrid from '@components/speakers-grid';
import { speakers } from 'contents/2021';

const SpeakersPage = () => {
  const meta = {
    title: 'Speakers | DevX Conf',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <SpeakersGrid speakers={speakers} />
      </Layout>
    </Page>
  );
};

export default SpeakersPage;