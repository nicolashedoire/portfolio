import React from 'react';
import styles from './styles.module.scss';

export default function Background() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.item1}></div>
            </div>
        </div>
    )
}