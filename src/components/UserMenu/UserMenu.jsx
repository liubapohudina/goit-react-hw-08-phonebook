import Button from 'components/Form/Button';
import styles from './userMenu.module.css';
import { userInfo } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
    const {name} = useSelector(userInfo)
    return (
            <div className={styles.boxUser}>
            <p>{name}</p> 
            <Button className={styles.btnLogOut} text="Log out" type='button'/>
        </div>
    )
}

export default UserMenu;