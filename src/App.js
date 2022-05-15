import { useContext, useEffect, useState } from "react";
import Books from "./components/Books/Books";
import NewBooks from "./components/NewBook/NewBook";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import ErrorModal from "./components/UI/Modal/ErrorModal";
import Wrapper from "./components/Helpers/Wrapper";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
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
    console.log("Book added", book);
    setBooks((prevBooks) => {
      return [...prevBooks, book];
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <Wrapper>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && (
          <>
            {error && (
              <ErrorModal
                title="OH! nono"
                message={"how can you do that"}
                onConfirm={errorHandler}
              ></ErrorModal>
            )}
            <NewBooks onAddBook={addBookHandler} />
            <Books items={books} />
          </>
        )}
      </main>
    </Wrapper>
  );
}

export default App;
