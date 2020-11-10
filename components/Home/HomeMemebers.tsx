import styles from '../../styles/pages/home.module.scss';

const HomeMembers = () => {
    const members = [
        {name: 'Dr. US Hampannavar', designation: 'Executive Member', image: '/members/DrUSHampannavar.jpg'},
        {name: 'Dr. Arpitha VS', designation: 'Member', image: '/members/DrArpithaVS.jpg'},
        {name: 'Yashaswi', designation: 'Member', image: '/members/Yashaswi.jpg'},
        {name: 'Dheeraj KV', designation: 'Member', image: '/members/DheerajKV.jpg'},
        {name: 'Harush DP', designation: 'Member', image: '/members/HarushDP.jpg'},
        {name: 'Nivedita', designation: 'Member', image: '/members/Nivedita.jpg'},
        {name: 'Kiran Saranadagoudar', designation: 'Member', image: '/members/KiranSaranadagoudar.jpg'},
        {name: 'Anupama', designation: 'Member', image: '/members/Anupama.jpg'},
    ].map(m => {
        return (
            <div className={styles.memberTile}>
                <img src={m.image} className={styles.memberImage + ' rounded-circle'} alt={m.name}/>
                <div className={styles.memberName}> {m.name} </div>
                <div className={styles.memberDesignation}> {m.designation} </div>
            </div>
        )
    });
    return (
        <section className={styles.homeMembers}>
            <div className={styles.memberContainer}>
                <h3 className={styles.memberHeader}>Members</h3>
                <p className={styles.memberSubHeader}>Committed to the Cause</p>

                <div className={styles.memberWrapper}>
                    {members}
                </div>
            </div>
        </section>
    )
}

export default HomeMembers;
