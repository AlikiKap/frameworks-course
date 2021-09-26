import React from 'react';
import styles from './MainNews.module.css';
export default function MainNews() {
    return (

        <div className ={styles.MainNewsBox}>
            <h1 className = {styles.heading1}>Koronavirus</h1>
            <img className = {styles.imageNews} src ='https://hs.mediadelivery.fi/img/658/8827eb979dab622d136bb043b0aa2030.jpg.webp' />
            <div className ={styles.NewsText}>Israelissa puolet sairaala­potilaista on rokotettuja, ja se herätti epäilyksen rokotteiden tehosta – taustalla on harha­päätelmä</div>
        </div>
    )
}
