import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css'; 
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
    const isLogin = true;
 

    return (
        <nav className={styles.navList}>
            {isLogin && <NavLink className={styles.link} to='/contacts'>
                <div className={styles.linkContainer}>
                    <span className={styles.linkText}>Contacts</span>
                </div>
            </NavLink>}
           
            {isLogin ? <UserMenu /> : (
                <><NavLink className={styles.link} to='/login'>
                <div className={styles.linkContainer}>
                    <span className={styles.linkText}>Log in</span>
                </div>
            </NavLink>
            <NavLink className={styles.link} to='/register'>
                <div className={styles.linkContainer}>
                    <span className={styles.linkText}>Register</span>
                </div>
                    </NavLink>
                </>)} 
        </nav>
    );
};

export default Navigation;




