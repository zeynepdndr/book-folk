import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>Let's do</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
