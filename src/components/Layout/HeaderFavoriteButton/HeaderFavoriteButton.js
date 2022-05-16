import FavoritesIcon from "../../Favorites/FavoritesIcon";
import Button from "../../UI/Button/Button";
import styles from "./HeaderFavoriteButton.module.css";

const HeaderFavoriteButton = (props) => {
  return (
    <Button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <FavoritesIcon />
      </span>
      <span>My Favorites</span>
      <span className={styles.badge}>4</span>
    </Button>
  );
};

export default HeaderFavoriteButton;
