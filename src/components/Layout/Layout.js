import MainNavigation from "./MainNavigation/MainNavigation";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <MainNavigation onShowFavorites={props.onShowFavorites} />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Layout;
