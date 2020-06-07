import React from 'react';
import styles from './styles.module.scss' 

export default function Hear(props: any) {
    return (
        <div className={styles.hear} style={props.style}/>
    )
}