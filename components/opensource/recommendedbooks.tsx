import React, { useState } from 'react';
import Link from 'next/link';

import Popup from '@components/popup';
import cn from 'classnames';
import styles from './recommendedbooks.module.css';

const RecommendedBooks = () => {

  return (
    <div className="row">
        <h3>Recommended books</h3>
      <div className={styles.recommendedbooks}>
        <div className={styles['remmendedbooks-item']}>
          <h3>The Unseen Labor Behind Our Digital Infrastructure</h3>
          <p>
            Nadia Eghbal in 2016 with the support of the Ford Foundation authored an extensive report into the unseen labor behind our digital infrastructure.
          </p>
          <p>
            Eghbal outlines, digital infrastructure should be treated as a necessary public good. Free public source code makes it exponentially cheaper and easier for companies to build software, and makes technology more accessible across the globe. However, there is a common misconception that the labor for open source projects is well-funded. In reality, it is largely created and maintained by volunteers who do it to build their reputations, out of a sense of obligation, or simply as a labor of love. 
          </p>
          <Link href="https://www.fordfoundation.org/work/learning/research-reports/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure/">
            <button
                tabIndex={0}
                className={cn('btn btn--secondary', styles['donate-btn'])}>
                Read Report
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
