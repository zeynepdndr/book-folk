import { useReducer } from "react";
import BookContext from "./book-context";

const defaultBookState = {
  items: [],
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL":
      return { items: action.payload };

    case "ADD_ITEM":
      const existingBookItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("state", state);
      console.log("action", action);
      const existingBookItem = state.items[existingBookItemIndex];
      if (!existingBookItem) {
        const uptadedItems = state.items.concat(action.payload);
        return { items: uptadedItems };
      } else return state;

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const BookProvider = (props) => {
  const [bookState, dispatchBookAction] = useReducer(
    bookReducer,
    defaultBookState
  );
  const getAllBooksHandler = (items) => {
    dispatchBookAction({ type: "GET_ALL", payload: items });
  };
  const addItemToBookHandler = (item) => {
    dispatchBookAction({ type: "ADD_ITEM", payload: item });
  };
  const removeItemFromBookHandler = (id) => {
    dispatchBookAction({ type: "REMOVE_ITEM", payload: id });
  };

  const bookContext = {
    items: bookState.items,
    getAll: getAllBooksHandler,
    addItem: addItemToBookHandler,
    removeItem: removeItemFromBookHandler,
  };

  return (
    <BookContext.Provider value={bookContext}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
