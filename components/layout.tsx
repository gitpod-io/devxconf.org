/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Footer from './footer';
import Link from 'next/link';
import Logo from './icons/icon-logo';
import MobileMenu from './mobile-menu';
import { NAVIGATION } from '@lib/constants';
import { SkipNavContent } from '@reach/skip-nav';
import cn from 'classnames';
import styles from './layout.module.css';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
};

export default function Layout({ children, className, hideNav, layoutStyles }: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;

  return (
    <>
      <div className={styles.background}>
        {!hideNav && (
          <div className={styles["header-container"]}>
            <div className={styles.wrapper}>
              <header className={cn(styles.header)}>
                <div className={styles['header-logos']}>
                  <Link href="/">
                    {/* eslint-disable-next-line */}
                    <a className={styles.logo}>
                      <Logo />
                    </a>
                  </Link>
                  <MobileMenu key={router.asPath} />
                </div>
                <div className={styles.tabs}>
                  {NAVIGATION.map(({ name, route }) => (
                    <Link key={name} href={route}>
                      <a
                        className={cn(styles.tab, {
                          [styles['tab-active']]: activeRoute.startsWith(route)
                        })}
                      >
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </header>
            </div>
           </div>
        )}
        <div className={styles.page}>
          <main className={styles.main} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
