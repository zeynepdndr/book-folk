import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Profile</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">My Favorites</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Button onClick={ctx.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
