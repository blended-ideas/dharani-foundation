import styles from '../../styles/pages/home.module.scss';

const HomeActivities = () => {
    const activities = [
        {
            title: 'Water Conservation',
            subtitle: 'Lifeline',
            image: '/activities/water-conservation.jpg',
            theme: styles.secondaryTile
        },
        {
            title: 'Plantation',
            subtitle: 'Commitment for Future',
            image: '/activities/plantation.jpg',
            theme: styles.darkTile
        },
        {
            title: 'Personal Hygiene',
            subtitle: 'One Step at a Time',
            image: '/activities/personal-hygine.jpg',
            theme: styles.primaryTile
        },
        {
            title: 'Nisarga Ganapathi',
            subtitle: 'Clay Ganapthi',
            image: '/activities/ganapathi.jpg',
            theme: styles.darkTile
        },
        {
            title: 'Green Marriages',
            subtitle: 'One Step at a Time',
            image: '/activities/green-marriages.jpg',
            theme: styles.primaryTile
        },
        {
            title: 'Environmental Awareness Programs',
            subtitle: 'Education',
            image: '/activities/eap.jpg',
            theme: styles.secondaryTile
        },
    ].map(ac => {
        return (
            <div className={'card ' + ac.theme}>
                <img src={ac.image} className="card-img" alt={ac.title + ' | Dharani Foundation'}/>
                <div className="card-body p-5">
                    <h5 className={styles.title}>{ac.title}</h5>
                    <p className={styles.subtitle}>{ac.subtitle}</p>
                </div>
            </div>
        )
    })
    return (
        <section className={styles.homeActivities}>
            <h3 className={styles.title}>Activities</h3>

            <div className={styles.subtitle}>Making a Difference</div>

            <div className={styles.activityItems}>
                {activities}
            </div>
        </section>
    )
}

export default HomeActivities;
