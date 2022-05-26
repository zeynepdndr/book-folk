import React from "react";

const BookContext = React.createContext({
  items: [
    { id: "1", bookName: "book1" },
    { id: "2", bookName: "book2" },
  ],
  getAll: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default BookContext;
