import { useContext } from "react";
import FavoritesContext from "../../../store/favorites-context";
import FavoritesIcon from "../../Favorites/FavoritesIcon";
import Button from "../../UI/Button/Button";
import styles from "./HeaderFavoriteButton.module.css";

const HeaderFavoriteButton = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const numberOffavorites = favoritesCtx.items.length;
  console.log("numberOffavorites", favoritesCtx);

  return (
    <Button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <FavoritesIcon />
      </span>
      <span>My Favorites</span>
      <span className={styles.badge}>{numberOffavorites}</span>
    </Button>
  );
};

export default HeaderFavoriteButton;
