import React from 'react';
import Section from '@components/layout/section';
import cn from 'classnames';
import styles from './books.module.css';

const Books = () => (
  <Section>
    <div className="row">
      <div>
        <p className={cn("heading-quadrary", styles.sub)}>Recommended books</p>
        <div className={styles.book}>
          <div>
            <img src="/book.png" alt="The Unseen Labor Behind Our Digital Infrastructure" />
          </div>
          <div>
            <h2 className="heading-tertiary">The Unseen Labor Behind Our Digital Infrastructure</h2>
            <p>
              Nadia Eghbal in 2016 with the support of the Ford Foundation authored an extensive
              report into the unseen labor behind our digital infrastructure.
            </p>
            <p>
              Eghbal outlines, digital infrastructure should be treated as a necessary public good.
              Free public source code makes it exponentially cheaper and easier for companies to
              build software, and makes technology more accessible across the globe. However, there
              is a common misconception that the labor for open source projects is well-funded. In
              reality, it is largely created and maintained by volunteers who do it to build their
              reputations, out of a sense of obligation, or simply as a labor of love.
            </p>
            <a href="https://www.fordfoundation.org/work/learning/research-reports/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure/" target="_blank" className={cn('btn btn--secondary', styles.btn)}>
              Read Report
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Books;
