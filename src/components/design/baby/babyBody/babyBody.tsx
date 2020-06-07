import React from 'react';
import styles from './styles.module.scss';
import ArmLeft from '../babyArms/babyLeftArm';
import ArmRight from '../babyArms/babyRightArm';
import LegLeft from '../babyLegs/babyLeftLeg';
import LegRight from '../babyLegs/babyRightLeg';

export default function BabyBody() {
    return (
        <div className={styles.bodyContainer}>
        <ArmLeft/>
        <ArmRight/>
        <div className={styles.body}/>
        <LegLeft/>
        <LegRight/>
        </div>
    )
}