import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import Button from "../../UI/Button/Button";
import HeaderFavoriteButton from "../HeaderFavoriteButton/HeaderFavoriteButton";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  // const { user } = ctx;
  // console.log("user", user);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to={"/popular"}>Popular</Link>
        </li>
        <li>
          <Link to={"/popular"}>Latest</Link>
        </li>
        <li className={styles.title}>
          <Link to={"/"}>Bookers</Link>
        </li>
        {ctx.isLoggedIn && (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
