import { useState } from "react";
import FavoritesService from "../../services/favorites.service";
import UserFavoritesService from "../../services/userFavorites.service";

const Other = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  const favoritesGetHandler = () => {
    FavoritesService.getAll().then((data) => {
      setFavoriteList(data);
    });
  };
  const favoritesAddHandler = () => {
    UserFavoritesService.add("8QAS9NengKoPkbwSqP1a", "şişi").then((data) => {});
  };

  return (
    <>
      <button onClick={favoritesGetHandler}>GetFavorites</button>
      <button onClick={favoritesAddHandler}>AddFavorites</button>

      {/* {favoriteList.map((item) => {
        <h1>item</h1>;
      })} */}
    </>
  );
};

export default Other;
