import Layout from '@components/layout';
import Link from 'next/link';
import Page from '@components/page';
import React from 'react';
import styles from './404.module.css';

export default function Conf() {
  return (
    <Page meta={{ title: '', description: '' }}>
      <Layout>
        <div className="row">
          <div className={styles.wrapper}>
            <h1 className="heading-primary">404</h1>
            <p>Oh, no! Something went wrong on our side.</p>
            <Link href="/">
              <a className="btn">Go to DevX Conf</a>
            </Link>
          </div>
        </div>
      </Layout>
    </Page>
  );
}
