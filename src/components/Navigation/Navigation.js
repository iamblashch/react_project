import { AiFillHome } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";

import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
    <div className='container'>
        <div className={styles.mobileNav}>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to='/home' className={styles.link}>
                        <div className={styles.favWrapper}>
                            <AiFillHome style={{ width: "38", height: "38", color: "white" }}/>
                        </div>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/diagram' className={styles.link}>
                        <div className={styles.favWrapper}>
                            <MdShowChart style={{ width: "38", height: "38", color: "white" }}/>
                        </div>
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/currency' className={styles.link}>
                        <div className={styles.favWrapper}>
                            <FaDollarSign style={{ width: "38", height: "38", color: "white" }}/>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
        <div className={styles.tabletNav}>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to='/home' className={styles.link}>
                        <div className={styles.favWrapper}>
                            <AiFillHome style={{ width: "18", height: "18", color: "white" }}/>
                        </div>
                        Home
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/diagram' className={styles.link}>
                        <div className={styles.favWrapper}>
                            <MdShowChart style={{ width: "18", height: "18", color: "white" }}/>
                        </div>
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
    </div>
    )
}

export default Navigation;