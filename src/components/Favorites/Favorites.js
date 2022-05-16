import ErrorModal from "../UI/Modal/ErrorModal";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const favoriteItems = (
    <ul className={styles["favorite-items"]}>
      {[{ id: "e1" }, { id: "e2" }, { id: "e3" }].map((item) => {
        <li>{item.id}</li>;
      })}
    </ul>
  );

  return (
    <ErrorModal
      title="My Favorites"
      message={"how can you do that"}
      onConfirm={null}
    >
      {" "}
      <div>
        <h1>HHEHEHHEEH</h1>
        {favoriteItems}
        <div>
          <span>Total</span>
          <span>5</span>
        </div>
        <div></div>
      </div>
    </ErrorModal>
  );
};

export default Favorites;
