import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
      
        <nav className={styles.navbar}>
            <img src='/logo.png'/>
            <ul>
                <Link href='/'><li>Home</li></Link>
                <Link href='/blog'><li>Blog</li></Link>
                <Link href='/contact'><li>Contact</li></Link>
                <Link href='/about'><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar