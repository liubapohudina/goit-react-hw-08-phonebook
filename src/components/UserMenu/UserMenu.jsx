import Button from 'components/Form/Button';
import styles from './userMenu.module.css';
import { userInfo } from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';


const UserMenu = () => {
    const { name } = useSelector(userInfo);

    const dispatch = useDispatch();
    const onClickLogOut = () => dispatch(logout());


    return (
            <div className={styles.boxUser}>
            <p>{name}</p> 
            <Button onClickLogout={onClickLogOut} className={styles.btnLogOut} text="Log out"  type='button'/>
        </div>
    )
}

export default UserMenu;