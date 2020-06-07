import React from 'react';
import BabyFace from './babyFace';
import BabyBody from './babyBody';
import styles from './styles.module.scss'

export default function Baby() {


    return (
        <div className={styles.baby}>
            <BabyFace></BabyFace>
            <BabyBody></BabyBody>
        </div>
    )
}