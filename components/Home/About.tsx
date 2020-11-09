import styles from '../../styles/pages/home.module.scss';
import Image from 'next/image';
import React from 'react';

const HomeAbout = () => {
    return (
        <section id="about" className={styles.homeAbout}>
            <Image src="/logo.webp" width="400" height="400"/>

            <div className={styles.detailContainer}>
                <h3 className={styles['about-title']}>About Dharani</h3>
                <p className={styles['about-detail']}>
                    Dharani Foundation is a Non-Profit organisation, formally registered in 2019, which focuses on
                    bringing
                    Environmental Awareness to the rural households. We work to bring about community Environmental
                    Sustainability and promote, Hygiene, Health and Happiness
                </p>
            </div>
        </section>
    )
}

export default HomeAbout;
