import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
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
                  <Button onClick={props.onLogout}>Logout</Button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
