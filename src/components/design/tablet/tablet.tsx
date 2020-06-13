import React from 'react';
import styles from './styles.module.scss';

export default function Tablet(props: any) {
    return (
        <div className={styles.tablet}>
            <div className={styles.screen}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}