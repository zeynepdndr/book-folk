import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Profile</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">My Favorites</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
