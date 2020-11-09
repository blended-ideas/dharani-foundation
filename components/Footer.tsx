import styles from '../styles/component/footer.module.scss';

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className={styles.footer}>
            <h1>Dharani Foundation</h1>
            <p> dharanifoundationbgm@gmail.com</p>
            <p> 7760251535; 9845270380</p>
            <p> No. 2, 4855, Sadashiv Nagar, Basavaraj Complex, APMC Main Road, Belagavi - 590001, Karnataka. </p>
            <p>©{year} by Dharani Foundation.</p>
        </footer>
    )
}

export default Footer;
