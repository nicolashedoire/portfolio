import React from 'react';
import styles from './styles.module.scss';

export default function TimelineMarker(props: any) {
    return (
        <React.Fragment>
            <div className={styles.timelineMarker} style={props?.marker}>
                <div className={styles.blueSphere} />
            </div>
            <div className={styles.timelineLink} style={props?.link}></div>
            <div className={styles.timelineMarker} style={props?.marker}>
                <div className={styles.blueSphere} />
            </div>
        </React.Fragment>
    )
}