import styles from './partner.module.css'

export interface PartnerProps {
    title: string;
    logo: string;
    website: string;
}

const Sponsor = ({title, logo, website}: PartnerProps) => (
   <a href={website} className="partner__link" target="_blank">
        <img 
            src={`/sponsors/${logo}`} 
            alt={title}
            className={styles.logo}
        />
   </a>
)

export default Sponsor