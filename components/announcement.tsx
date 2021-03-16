import React from 'react';
import cn from 'classnames';
import styles from './announcement.module.css';

const Announcement = () => (
    <div className={cn(styles.wrapper, 'heading-quadrary')}>
        Speakers and Partners will be announced soon
    </div>
)

export default Announcement