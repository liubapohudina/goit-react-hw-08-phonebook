import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css'; 

const Navigation = () => {
    return (
        <nav className={styles.navList}>
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
        </nav>
    );
};

export default Navigation;




