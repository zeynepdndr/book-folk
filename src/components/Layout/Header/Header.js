import Navigation from "./Navigation";
import bookImage from "../../../assets/bookship.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h />
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
        onClick={props.onShowFavorites}
      />
    </header>
  );
};

export default Header;
