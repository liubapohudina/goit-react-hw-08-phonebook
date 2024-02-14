import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
        <h3 className={styles.textH}>Developed by Lyubov Pohudina</h3>
            <p className={styles.textP}>Full Stack Developer</p>
        </footer>
    )
}