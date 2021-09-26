import React from 'react';
import styles from './NewsNotification.module.css';

export default function NewsNotification(props) {
    return (
        <div className={styles.NewsNotification}>
                <span>{props.topic}</span><span>{props.body}</span>
        </div>
    )
}
