import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <Link className={styles.link} to="/">home</Link>
            <Link className={styles.link} to="/posts">posts</Link> 
            <Link className={styles.link} to="/about">about</Link>
        </div>
    )
}
