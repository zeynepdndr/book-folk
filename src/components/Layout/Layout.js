import MainNavigation from "./MainNavigation/MainNavigation";
import styles from "./Layout.module.css";
import ErrorBoundary from "../ErrorBoundary";

const Layout = (props) => {
  return (
    <ErrorBoundary>
      <MainNavigation onShowFavorites={props.onShowFavorites} />
      <main className={styles.main}>{props.children}</main>
    </ErrorBoundary>
  );
};

export default Layout;
