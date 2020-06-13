import React from 'react';
import styles from './styles.module.scss';

export default function HamburgerButton(props: {onClick: any}) {
    return (
        <div className={styles.hamburger} onClick={props.onClick}>
            <div className={`${styles.menuBar} ${styles.bar1}`}></div>
            <div className={`${styles.menuBar} ${styles.bar2}`}></div>
            <div className={`${styles.menuBar} ${styles.bar3}`}></div>
        </div>
    )
}