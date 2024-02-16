import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <>
        <NavLink className={styles.link} to='/login'>
                <div className={styles.linkContainer}>
                    <span className={styles.linkText}>Log in</span>
                </div>
            </NavLink>
            <NavLink className={styles.link} to='/register'>
                <div className={styles.linkContainer}>
                    <span className={styles.linkText}>Register</span>
                </div>
            </NavLink>
          </>  
    )
}

export default Navbar;