import styles from './sponsor.module.css'

export interface SponsorProps {
    title: string;
    logo: string;
    website: string;
}

const Sponsor = ({title, logo, website}: SponsorProps) => (
   <a href={website} target="_blank">
        <img 
            src={`/sponsors/${logo}`} 
            alt={title}
            className={styles.logo}
        />
   </a>
)

export default Sponsor