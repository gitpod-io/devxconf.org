import React, { useState } from 'react';

import Popup from '@components/popup';
import cn from 'classnames';
import { organizationsWeSupport } from 'contents/diversity';
import styles from './support.module.css';

const Support = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="row">
      <div className={styles.support}>
        <div className={styles['support-item']}>
          <h3>Organisations we support:</h3>
          <ul>
            {organizationsWeSupport.map(org => (
              <li>
                <a
                  href={`https://twitter.com/${org.handle}`}
                  target="_blank"
                  key={org.handle}
                  className="heading-quadrary"
                >
                  @{org.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['support-item']}>
          <h3>There is still a lot to do</h3>
          <p>
            We're not, where we'd like to be. So we have to keep fighting for your values. For that
            we started a donation initative.
          </p>
          <p>
            For every registration to our discord channel we'll donate $1 to a non-profit
            organisation that we support. Would you like to join us?
          </p>
          <button
            tabIndex={0}
            className={cn('btn btn--secondary', styles['donate-btn'])}
            onClick={() => setIsShown(true)}
          >
            Donate Now
          </button>
          <Popup isShown={isShown} setIsShown={setIsShown}>
            <h2 className="heading-tertiary">Donate Now</h2>
            <p>
              Choose an orgainisation you'd like to support and we'll forward you to their website.
            </p>
            <ul className={styles['modal-list']}>
              {organizationsWeSupport.map(org => (
                <li>
                  <a
                    href={org.siteUrl}
                    target="_blank"
                    key={org.handle}
                    className="heading-quadrary"
                  >
                    {org.handle}
                  </a>
                </li>
              ))}
            </ul>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Support;
