import React from 'react';
import styles from './styles.module.scss';

export default function CloseButton(props: {onClick: any}) {
    return (
        <div className={styles.close} onClick={props.onClick}>
            <div className={`${styles.menuBar} ${styles.bar1}`}></div>
            <div className={`${styles.menuBar} ${styles.bar2}`}></div>
        </div>
    )
}