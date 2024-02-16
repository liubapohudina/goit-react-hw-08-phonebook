
import styles from './navigation.module.css'; 
import UserMenu from '../UserMenu/UserMenu';
import Navbar from './Navbar/Navbar';
import { isLogin } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const loginIs = useSelector(isLogin);
    return (
        <nav className={styles.navList}>
            {loginIs ? <UserMenu/> : <Navbar/>} 
        </nav>
    );
};

export default Navigation;




