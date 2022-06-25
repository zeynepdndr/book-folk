import styles from "./FavoritesItem.module.css";
const FavoritesItem = (props) => {
  return (
    <li key={props.item.id} className={styles["favorites-item"]}>
      <div className={styles.item}>
        <h2>{props.item.bookName}</h2>
        <span className={styles.icon} onClick={props.onRemove}>
          x
        </span>
      </div>
    </li>
  );
};

export default FavoritesItem;
