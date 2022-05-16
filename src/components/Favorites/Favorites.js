import styles from "./Favorites.module.css";

const Favorites = () => {
  const favoriteItems = (
    <ul className={styles["favorite-items"]}>
      {[{ id: e1 }, { id: e2 }, { id: e3 }].map((item) => {
        <li>{item.id}</li>;
      })}
    </ul>
  );

  return (
    <div>
      {favoriteItems}
      <div>
        <span>Total</span>
        <span>5</span>
      </div>
      <div></div>
    </div>
  );
};

export default Favorites;
