import React from 'react';
import styles from '../../styles/pages/home.module.scss';

const Founders = () => {
    const founders = [
        {
            name: 'Pradeep NV',
            title: 'Founder and Director',
            description: 'Has 7 years of experience in technical teaching, published 17 technical papers related to water and wastewater treatment, has more than 200 citations and two monographs. Has conducted numerous Environmental Awareness Sessions at colleges, NGO’s and Government Organizations.',
            image: '/founders/pradeep.jpg'
        },
        {
            name: 'Vijay S. Kumbar',
            title: 'Founder and Director',
            description: 'Has 7 years of experience in technical teaching. An Environmental Enthusiast and believes in creating Environmental Awareness in the society.',
            image: '/founders/vijay-s-kumbar.jpg'
        }
    ].map(founder => {
        return (
            <div className={styles.founderTile + ' row'}>
                <div className="col-12 col-sm-4">
                    <img src={founder.image} alt={founder.name} className="rounded-circle img-fluid"/>
                </div>
                <div className="col-12 col-sm-8">
                    <div className={styles.founderName}>{founder.name}</div>
                    <div className={styles.founderSub}>{founder.title}</div>
                    <div className={styles.founderDesc}>{founder.description}</div>
                </div>
            </div>
        )
    })
    return (
        <section className={styles.homeFounders}>
            <div className={styles.founderContainer}>
                <h3 className={styles.founderTitle}>Founder Members</h3>

                {founders}
            </div>
        </section>
    )
}

export default Founders;
