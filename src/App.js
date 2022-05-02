import { useEffect, useState } from "react";
import Books from "./components/Books/Books";
import NewBooks from "./components/NewBook/NewBook";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);
  const bookCollection = collection(db, "books");

  const getBooks = async () => {
    const bookSnapshot = await getDocs(bookCollection);
    const bookList = bookSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return bookList;
  };

  const addBookHandler = async (book) => {
    await addDoc(bookCollection, book);
    setBooks((prevBooks) => {
      return [...prevBooks, book];
    });
  };

  useEffect(() => {
    getBooks().then((books) => {
      console.log(books);
      setBooks(books);
    });
  }, []);

  return (
    <div>
      <NewBooks onAddBook={addBookHandler} />
      <Books items={books} />
    </div>
  );
}

export default App;
