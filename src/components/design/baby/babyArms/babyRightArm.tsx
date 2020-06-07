import React from 'react';
import styles from './styles.module.scss';

export default function BabyArm(props: any) {
    return (
        <div className={styles.armRight} style={props.style}>
        </div>
    )
}