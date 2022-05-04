import { useEffect, useState } from "react";
import Books from "./components/Books/Books";
import NewBooks from "./components/NewBook/NewBook";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import ErrorModal from "./components/UI/ErrorModal";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(true);
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

  const errorHandler = () => {
    setError(null);
  };

  useEffect(() => {
    getBooks().then((books) => {
      console.log(books);
      setBooks(books);
    });
  }, []);

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title="nono"
          message={"how can you do that"}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <NewBooks onAddBook={addBookHandler} />
      <Books items={books} />
    </Wrapper>
  );
}

export default App;
