import React from 'react';
import styles from './styles.module.scss' 

export default function Mouth() {
    return (
        <div className={styles.mouth}>
            <div className={styles.tongueLeft}/>
            <div className={styles.tongueRight}>
            {/* <div className={styles.tongueSeparator}/> */}
            </div>
        </div>
    )
}