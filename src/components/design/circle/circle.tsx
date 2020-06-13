import React from 'react';
import styles from './styles.module.scss';

export default function Circle(props:any) {

    return (
        <div className={styles.circle}>
            <img src={props.icon} alt="icon" width={props.width}/>
        </div>
    )
}