import Navigation from "./Navigation";
import bookImage from "../../../assets/bookship.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles["main-header"]}>
        <h1>Let's do</h1>

        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </header>
      <div className={styles["main-image"]}>
        <img src={bookImage} alt="Good friendship with books" />
      </div>
    </>
  );
};

export default Header;
