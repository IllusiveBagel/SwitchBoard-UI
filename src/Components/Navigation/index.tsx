import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <>
            <div className={styles.appBar}></div>
            <div className={styles.sideBar}>
                <ul>
                    <li>
                        <Link className={styles.navItem} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} to="/switches">
                            Switches
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;
