import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from './logo.svg'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt={'logo'}/>
                <span>BlogSpace</span>
            </div>
            <div>
                <Link className={styles.link} to="/home">home</Link>
                <Link className={styles.link} to="/posts">posts</Link>
                <Link className={styles.link} to="/about">about</Link>
            </div>
        </div>
    )
}
