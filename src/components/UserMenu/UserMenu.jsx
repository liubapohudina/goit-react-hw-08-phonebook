import Button from 'components/Form/Button';
import styles from './userMenu.module.css';

const UserMenu = () => {
    return (
            <div className={styles.boxUser}>
            <p>jon</p> 
            <Button className={styles.btnLogOut} text="Log out" type='button'/>
        </div>
    )
}

export default UserMenu;