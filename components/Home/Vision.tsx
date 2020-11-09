import styles from '../../styles/pages/home.module.scss';

const HomeVision = () => {
    return (
        <section className={styles.homeVision} id="vision">
            <div className={styles.detailContainer}>
                <h3 className={styles.visionTitle}> Vision </h3>

                <p className={styles.visionDetail}>
                    Our Vision is to make the environment around us greener, cleaner, healthier and a better place,
                    promoting basic sanitation and health. Hence supporting the growth and development of the Nation.
                </p>
            </div>
        </section>
    )
}

export default HomeVision;
