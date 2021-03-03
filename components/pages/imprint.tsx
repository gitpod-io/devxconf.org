import Layout from '@components/layout';
import TextWrapper from '@components/text-wrapper';

const Imprint = () => (
  <Layout>
    <TextWrapper>
      <h1 className="heading-secondary">Imprint</h1>
      <p>
        <div>Gitpod GmbH</div>
        <div>Managing Directors: Sven Efftinge, Moritz Eysholdt, Dr. Jan Köhnlein</div>
        <div>Am Germaniahafen 1</div>
        <div>24143 Kiel</div>
        <div>Germany</div>
        <br />
        <div>HRB 22228, Amtsgericht Kiel</div>
        <br />
        <div>VAT-ID : DE335127327</div>
        <br />
        <div>Email: <a href="mailto:contact@devxconf.org">contact@devxconf.org</a></div>
      </p>

      <h2>Disclaimer</h2>

      <h4>Liability for content</h4>
      <p>
        As a service provider we are responsible according to § 7 paragraph 1 of TMG for own
        contents on these pages under the general laws. According to § § 8 to 10 TMG we are not
        obliged as a service provider to monitor transmitted or stored foreign information or to
        investigate circumstances that indicate illegal activity. Obligations to remove or block the
        use of information under the general laws remain unaffected. However, a relevant liability
        is only possible from the date of knowledge of a specific infringement. Upon notification of
        such violations, we will remove the content immediately.
      </p>

      <h4>Liability for links</h4>
      <p>
        Our site contains links to external websites over which we have no control. Therefore we can
        not accept any responsibility for their content. The respective provider or operator of the
        pages is always responsible for the contents of any Linked Site. The linked sites were
        checked at the time of linking for possible violations of law. Illegal contents were at the
        time of linking. A permanent control of the linked pages is unreasonable without concrete
        evidence of a violation. Upon notification of violations, we will remove such links
        immediately.
      </p>

      <h4>Copyright</h4>
      <p>
        The contents and works on these pages created by the site operator are subject to German
        copyright law. Duplication, processing, distribution and any kind of exploitation outside
        the limits of copyright require the written consent of its respective author or creator.
        Downloads and copies of these pages are only permitted for private, non-commercial use. As
        far as the content is not created by the website operator, the copyrights of third parties.
        Especially content of third parties will be marked as such. If you still get aware of
        copyright infringement, we ask for a hint. Upon notification of violations, we will remove
        such content immediately.
      </p>

      <h4>Settlements of Disputes</h4>
      <p>
        The European Commission provides a platform for an online settlement of disputes which can
        be accessed under <a href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a>. Gitpod is neither obliged to take
        part in alternative dispute resolutions before a consumer dispute settlement commission or
        will do so voluntarily.
      </p>
    </TextWrapper>
  </Layout>
);

export default Imprint;
