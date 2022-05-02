import { useEffect, useState } from "react";
import Books from "./components/Books/Books";
import NewBooks from "./components/NewBook/NewBook";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const bookCollection = collection(db, "books");
    const bookSnapshot = await getDocs(bookCollection);
    const bookList = bookSnapshot.docs.map((doc) => doc.data());
    return bookList;
  };

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  // const DUMMY_EXPENSES = [
  //   {
  //     id: "e1",
  //     name: "The Book of the Day",
  //     page: 545,
  //     startDate: new Date("sep 01, 2020 01:59:59"),
  //   },
  // ];

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
