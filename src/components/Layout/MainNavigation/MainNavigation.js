import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import Button from "../../UI/Button/Button";
import HeaderFavoriteButton from "../HeaderFavoriteButton/HeaderFavoriteButton";
import styles from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    // <header>
    //   <div className={styles.logo}>
    //     <Link to={"/"}>BookFolks</Link>
    //   </div>
    //   <nav className={styles.nav}>
    //     <ul>
    //       <li>
    //         <Link to={"/popular"}>Popular</Link>
    //       </li>
    //       <li>
    //         <Link to={"/popular"}>Latest</Link>
    //       </li>
    //       <li className={styles.title}>
    //         <Link to={"/"}>Bookers</Link>
    //       </li>
    //       {ctx.isLoggedIn && (
    //         <>
    //           <li>
    //             <Link to={"/profile"}>Profile</Link>
    //           </li>
    //           <li>
    //             <HeaderFavoriteButton onClick={props.onClick} />
    //           </li>
    //           <li>
    //             <Button className={styles.logout} onClick={ctx.onLogout}>
    //               Logout
    //             </Button>
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </nav>
    // </header>
    <div className={styles.header}>
      <div class="header-left">
        <ul>
          <li
            data-open-accessibility-text-original="16px"
            style={{ fontSize: "16px" }}
          >
            <a href="/pages/our-story" class="navigable">
              Our Story
            </a>
          </li>

          <li
            data-open-accessibility-text-original="16px"
            style={{ fontSize: "16px" }}
          >
            <a href="/pages/science" class="navigable">
              Our Science
            </a>
          </li>

          <li
            data-open-accessibility-text-original="16px"
            style={{ fontSize: "16px" }}
          >
            <a href="/pages/help" class="navigable">
              Help
            </a>
          </li>
        </ul>
        <div class="hamburguremenu">
          <span
            data-open-accessibility-text-original="20px"
            style={{ fontSize: "16px" }}
          ></span>
          <span
            data-open-accessibility-text-original="20px"
            style={{ fontSize: "16px" }}
          ></span>
          <span
            data-open-accessibility-text-original="20px"
            style={{ fontSize: "16px" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
