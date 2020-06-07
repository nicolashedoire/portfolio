import React from 'react';
import Eyes from '../eyes';
import LeftHear from '../hear';
import RightHear from '../hear';
import Mouth from '../mouth';
import Nose from '../nose';
import styles from './styles.module.scss';

export default function BabyFace() {
    const hearLeftPosition = { left: '-30px', top: '200px' };
    const hearRightPosition = { right: '-30px', top: '200px' };

    return (
        <div className={styles.faceContainer}>
        <LeftHear style={hearLeftPosition} />
        <RightHear style={hearRightPosition} />
        <div className={styles.face}>
            <Eyes/>
            <Nose/>
            <Mouth/>
        </div>
        </div>
    )
}