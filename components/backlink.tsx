import IconArrow from '@components/icons/icon-arrow';
import Link from 'next/link';
import styles from './backlink.module.css';

interface BackLinkProps {
  destinationText: string;
  href: string;
}

const BackLink = ({ href, destinationText }: BackLinkProps) => (
  <Link href={href}>
    <a className={styles['link']}>
      <IconArrow />
      &nbsp; Back to {destinationText}
    </a>
  </Link>
);

export default BackLink;
