import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <dev className={styles.container}>
                <dev className={styles.leftside}>
                   
                   <Link href='/'><a className={styles.logo} href=""><p>LOGO</p></a></Link>
                </dev>
                <dev className={styles.rightside}>
                   <h1>My new website</h1>
                </dev>
            </dev>
        </footer>
    )
}

export default Footer