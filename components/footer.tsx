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

import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className="row">
      <footer className={styles.footer}>
        <Link href="/imprint">
          <a className={styles.link}>Imprint</a>
        </Link>
        <Link href="/privacy-policy">
          <a className={styles.link}>Privacy Policy</a>
        </Link>
        <Link href="/diversity">
          <a className={styles.link}>DE&I</a>
        </Link>
        <a
          className={styles.link}
          href="https://github.com/gitpod-io/devxconf.org/"
          target="_blank"
        >
          Source Code
        </a>
        <Link href="/code-of-conduct">
          <a className={styles.link}>Code of Conduct</a>
        </Link>
      </footer>
    </div>
  );
}
