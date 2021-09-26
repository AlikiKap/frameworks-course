import React from 'react';
import styles from './MostReadArticle.module.css';

export default function MostReadArticle(props) {

    return (

             <div className = {styles.MostReadArticle}>
                <span className = {styles.ArticleNumber}>{props.number}</span>
                <span className={styles.ArticleText}>{props.text}</span>
            </div>
    )
}
