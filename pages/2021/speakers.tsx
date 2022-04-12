import Layout from '@components/layout';
import { META_DESCRIPTION } from '@lib/constants';
import Page from '@components/page';
import SpeakersGrid from '@components/speakers-grid';

const SpeakersPage = ({speakers}: any) => {
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

export async function getServerSideProps() {
  const req = await fetch(`https://devxconf.org/json/2021/speakers.json`);
  const speakers = await req.json();

  return {
      props: { speakers },
  }
}