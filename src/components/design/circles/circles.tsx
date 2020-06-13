import React from 'react';
import styles from './styles.module.scss'

export default function Circles(props: { items: Array<string> }) {

    return (
        <div className={styles.circles}>
            <div>
            <div className={styles.circleBlue}>
                <img src='img/brain-icon-black.svg' alt={props.items[2]} width="50"/>
                </div>
                <p>{props.items[0]}</p>
            </div>
            <div>
            <div className={styles.circleRed}>
                <img src='img/compass-icon.png' alt={props.items[2]} width="90"/>
            </div>
            <p>{props.items[1]}</p>
            </div>
            <div>
            <div className={styles.circleGreen}>
                <img src='img/flash-icon-bis.png' alt={props.items[2]} width="100"/>
            </div>
            <p>{props.items[2]}</p>
            </div>
        </div>
    )
}