import React from 'react';
import styles from './styles.module.scss';

export default function mobile(props:any) {
    return (
        <div className={styles.mobile}>
            <div className={styles.screen}>
                <div className={styles.topBar}></div>
                <div className={styles.content}>
                {props.children}
                </div>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <div className={styles.triangle}>
                            <div className={styles.hidePart}></div>
                        </div>
                    </div>
                    <div className={styles.control}>
                        <div className={styles.circle}></div>
                    </div>
                    <div className={styles.control}>
                        <div className={styles.square}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}