import Link from 'next/link';
import styles from './partner.module.css';

export interface PartnerProps {
  title: string;
  logo: string;
  website: string;
  noDetailsPage?: boolean;
}

const Sponsor = ({ title, logo, noDetailsPage, website }: PartnerProps) => {
  const renderLogo = () => <img src={`/sponsors/${logo}`} alt={title} className={styles.logo} />;

  return !noDetailsPage ? (
    <Link href={`/expo/${title.toLowerCase()}`}>
      <a className="partner__link">{renderLogo()}</a>
    </Link>
  ) : (
      <a href={website} target="_blank" className="partner__link">
          {renderLogo()}
      </a>
  );
};

export default Sponsor;
