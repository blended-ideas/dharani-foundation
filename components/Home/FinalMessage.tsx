import styles from '../../styles/pages/home.module.scss';
import React from 'react';

const HomeFinalMessage = () => {
    return (
        <section className={styles.homeFinalMessage}>
            <p className="font-weight-bold">
                न त्वहं कामये राज्यं न स्वर्गं नापुनर्भवम् । <br/> कामये दुःखतप्तानां प्राणिनाम् आर्तिनाशनम् ॥
            </p>
            <p className="mr-2">
                - Mahabharata Dronaparva
            </p>
            <p className={styles.messageSub}>
                “O God, I do not need any Kingdom. I do not want even Heaven, <br/> I do not want another birth also. If
                you
                want to grace me, <br/>kindly allow me a chance to eradicate the pains of the poor who are suffering”.
            </p>
        </section>
    )
}

export default HomeFinalMessage;
