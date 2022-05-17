import { useReducer } from "react";
import FavoritesContext from "./favorites-context";

const defaultFavoritesState = {
  items: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingFavoritesItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingFavoritesItem = state.items[existingFavoritesItemIndex];

      if (!existingFavoritesItem) {
        const uptadedItems = state.items.concat(action.payload);
        return { items: uptadedItems };
      } else return state;
    case "REMOVE_ITEM":
      return state.items.filter((item) => item.id !== action.payload);
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
    items: favoritesState.items,
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
