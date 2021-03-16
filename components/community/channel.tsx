import React from 'react'
import styles from './channel.module.css';

export interface ChannelProps {
    title: string;
    href: string;
    icon: JSX.Element
}

const Channel = ({ title, href, icon }: ChannelProps) => (
    <a href={href} target="_balnk" className={styles.channel}>
        <img src="/channel-bg.svg" className={styles.bg} aria-hidden="true"/>
        {icon}
        <h3 className="heading-quadrary">{title}</h3>
    </a>
)

export default Channel
