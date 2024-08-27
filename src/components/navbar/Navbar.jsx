import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from './logo.svg'
import loginIcon from  './login.svg'

export default function Navbar() {

    const auth = localStorage.getItem('auth')
    const name = localStorage.getItem('name')

    return(
        <div className={styles.navbar}>
            <Link to="/BlogSpace/home" className={styles.logo}>
                <img src={logo} alt={'logo'}/>
                <span>BlogSpace</span>
            </Link>
            <div>
                <Link className={styles.link} to="/BlogSpace/home">home</Link>
                <Link className={styles.link} to="/BlogSpace/posts">posts</Link>
                <Link className={styles.link} to="/BlogSpace/about">about</Link>
                <div className={styles.linkLoginCont}>
                    <Link to="/BlogSpace/login" className={styles.linkLogin}>
                        <span>{auth ? `${name}`: 'login'}</span>
                        <img src={loginIcon} alt={''}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
