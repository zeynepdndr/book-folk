import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import ErrorModal from "../UI/Modal/ErrorModal";
import FavoritesItem from "./FavoritesItem";
import styles from "./Favorites.module.css";

const Favorites = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const { items, removeItem } = favoritesCtx;

  const favoriteItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const favoriteItems = (
    <ul className={styles["favorites-items"]}>
      {favoritesCtx.items.map((item) => {
        return (
          <FavoritesItem
            item={item}
            key={item.id}
            onRemove={favoriteItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <ErrorModal
      title="My Favorites"
      message={"how can you do that"}
      onConfirm={null}
      onClose={props.onClose}
    >
      {favoriteItems}
    </ErrorModal>
  );
};

export default Favorites;
