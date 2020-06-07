import React from 'react';
import styles from './styles.module.scss';

export default function TimelineMarker() {

    return (
        <React.Fragment>
        <div className={styles.timelineMarker}/>
        <div className={styles.timelineLink}></div>
        <div className={styles.timelineMarker}/>
        </React.Fragment>
    )
}