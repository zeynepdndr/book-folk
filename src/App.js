import { useState } from "react";
import Books from "./components/Books/Books";
import NewBooks from "./components/NewBook/NewBook";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      name: "The Book of the Day",
      page: 545,
      startDate: new Date("sep 01, 2020 01:59:59"),
    },
    {
      id: "e2",
      name: "The Book of the Month",
      page: 546,
      startDate: new Date("may 01, 2021 01:59:59"),
    },
  ];

  const [books, setBooks] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("");

  const addBookHandler = (book) => {
    setBooks((prevBooks) => {
      return [...prevBooks, book];
    });
  };

  return (
    <div>
      <NewBooks onAddBook={addBookHandler} />
      <Books items={books} />
    </div>
  );
}

export default App;
