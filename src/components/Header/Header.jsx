import Navigation from "../Navigation/Navigation";
import styles from './header.module.css';
import { Loader } from "../../components/Form/Loader";
import { loading } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";


export function Header() {
const isLoad = useSelector(loading)

    return (
        <header className="container">
            <div className={styles.navMenu}>
                {isLoad ? <Loader /> : <Navigation />}
            </div>    
        </header>    
    )
}