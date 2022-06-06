import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import Button from "../../UI/Button/Button";
import HeaderFavoriteButton from "../HeaderFavoriteButton/HeaderFavoriteButton";
import bookersLogo from "../../../assets/bookers-logo.jpg";
import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <header>
      <div className={styles["header-left"]}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to={"/popular"}>Popular</Link>
            </li>
            <li>
              <Link to={"/popular"}>Latest</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={bookersLogo} alt="Bookers" />
        </Link>
      </div>
      <div className={styles["header-right"]}>
        {ctx.isLoggedIn && (
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <HeaderFavoriteButton onClick={props.onClick} />
              </li>
              <li>
                <Button className={styles.logout} onClick={ctx.onLogout}>
                  Logout
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
