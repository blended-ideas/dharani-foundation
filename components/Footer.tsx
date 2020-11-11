import styles from '../styles/component/footer.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h1>Dharani Foundation</h1>
                <p> dharanifoundationbgm@gmail.com</p>
                <p> 7760251535; 9845270380</p>
                <p> No. 2, 4855, Sadashiv Nagar, Basavaraj Complex, APMC Main Road, Belagavi - 590001, Karnataka. </p>

                <div className="mt-2">
                    <a href="https://www.facebook.com/dharanifoundation" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} className="mx-2"/>
                    </a>

                    <a href="https://www.instagram.com/dharanifoundation/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="mx-2"/>
                    </a>
                </div>
                <p className="mt-2">©{year} by Dharani Foundation.</p>
            </div>
        </footer>
    )
}

export default Footer;
