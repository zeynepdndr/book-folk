import React from "react";

const FavoritesContext = React.createContext({
  items: [
    { id: "1", bookName: "book1" },
    { id: "2", bookName: "book2" },
  ],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default FavoritesContext;
