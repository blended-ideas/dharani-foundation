import styles from '../../styles/pages/home.module.scss';

const HomeMission = () => {
    return (
        <section className={styles.homeMission} id="mission">
            <div className={styles.detailContainer}>
                <h3 className={styles.missionTitle}>Mission</h3>
                <ul className={styles.missionItems}>
                    <li> To engage activities to promote Community Environmental Empowerment.</li>
                    <li> To spread Environmental Awareness among the Rural Community.</li>
                    <li> To engage rural students and promote Sanitation and Hygiene programs.</li>
                </ul>
            </div>
        </section>
    )
}

export default HomeMission;
