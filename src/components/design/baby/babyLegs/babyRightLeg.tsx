import React from 'react';
import styles from './styles.module.scss';

export default function BabyLeg(props: any) {
    return (
        <div className={styles.legLeft} style={props.style}>
        </div>
    )
}