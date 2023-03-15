import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <>
        <nav className={styles.nav}>
            <NavLink to='/home' className={styles.link}>Home</NavLink>
            <NavLink to='/diagram' className={styles.link}>Diagram</NavLink>
            <NavLink to='/currency' className={styles.link}>Currency</NavLink>
        </nav>
        </>
    )
}

export default Navigation;