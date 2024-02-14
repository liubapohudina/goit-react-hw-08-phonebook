import Navigation from "../Navigation/Navigation";
import styles from './header.module.css'

export function Header() {
    return (
        <header className="container">
            <nav className={styles.navMenu}>
            <Navigation />
            </nav>    
        </header>    
    )
}