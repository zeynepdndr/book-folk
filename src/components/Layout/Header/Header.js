import Navigation from "./Navigation";
import bookImage from "../../../assets/bookship.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles["main-header"]}>
        <p>Popular</p>
        <p>Latest</p>
        <h1>The Bookers</h1>
        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
          onClick={props.onShowFavorites}
        />
      </header>
      <div className={styles["main-image"]}>
        <img src={bookImage} alt="Good friendship with books" />
      </div>
    </>
  );
};

export default Header;
