import { useReducer } from "react";
import FavoritesContext from "./favorites-context";

const defaultFavoritesState = {
  items: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      //TODO: check if item is already in the list
      //TODO: add item which includes only id and bookName
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const FavoritesProvider = (props) => {
  const [favoritesState, dispatchFavoritesAction] = useReducer(
    favoritesReducer,
    defaultFavoritesState
  );
  const addItemToFavoritesHandler = (item) => {
    dispatchFavoritesAction({ type: "ADD_ITEM", payload: item });
  };
  const removeItemFromFavoritesHandler = (id) => {
    dispatchFavoritesAction({ type: "REMOVE_ITEM", payload: id });
  };

  const favoritesContext = {
    items: favoritesState,
    addItem: addItemToFavoritesHandler,
    removeItem: removeItemFromFavoritesHandler,
  };

  return (
    <FavoritesContext.Provider value={favoritesContext}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
