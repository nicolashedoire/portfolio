import React from 'react';
import styles from './styles.module.scss';

export default function Eyes() {

    return (
        <section className={styles.eyesContainer}>
            <div className={styles.eyeLeftContainer}>
                <div className={styles.eyelidsTop}/> 
                <figure className={styles.eye}>
                    <span className={styles.iris}/>
                </figure>
                <div className={styles.eyelidsBottom}/>
            </div>

            <div className={styles.eyeRightContainer}>
                <div className={styles.eyelidsTop}/>
                <figure className={styles.eye}>
                    <span className={styles.iris}/>
                </figure>
                <div className={styles.eyelidsBottom}/>
            </div>
        </section>
    )

}