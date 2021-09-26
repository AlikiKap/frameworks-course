import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
           <div className={styles.headerTitle}>HELSINGIN SANOMAT</div>
           <div>Uutiset</div>
           <div>Lehdet</div>
           <div>Tilaa</div>
           <div>Kirjaudu</div>
           <div>Valikko</div>
        </div>
    )
}
