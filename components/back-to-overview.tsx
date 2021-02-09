import IconArrow from '@components/icons/icon-arrow';
import Link from 'next/link';
import cn from 'classnames';
import styles from './back-to-overview.module.css'

const BackToOverview = () => (
  <div className={cn('row', styles['link-container'])}>
    <Link href="/">
      <a className={styles['link']}>
        <IconArrow />&nbsp; Back to Overview
      </a>
    </Link>
  </div>
);

export default BackToOverview