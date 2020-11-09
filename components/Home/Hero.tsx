import styles from '../../styles/pages/home.module.scss';
import React from 'react';

const HomeHero = () => {
    return (
        <section className={styles.homeHero}>
            <div className={styles.heroImage}>
                <img src="/home_hero.jpg" alt="Dharani Foundation" className="img-fluid"/>
            </div>

            <div className={styles.heroText}>
                <h1 className={styles.title + ' brand'}>Dharani Foundation</h1>
                <p className={styles.subtitle}>कामये दुःखतप्तानां प्राणिनाम् आर्तिनाशनम् ॥</p>
            </div>
        </section>
    )
}

export default HomeHero;
