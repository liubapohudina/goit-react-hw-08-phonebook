import Navigation from "../Navigation/Navigation";
import styles from './header.module.css';


export function Header() {
    return (
        <header className="container">
            <div className={styles.navMenu}>
            <Navigation />
            </div>    
        </header>    
    )
}