import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const booksCollection = collection(db, "books");

class BooksService {
  getAll = async () => {
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return booksList;
  };

  add = async (book) => {
    await addDoc(booksCollection, book);
    console.log("Book added", book);
  };

  delete = async (id) => {
    const bookDoc = doc(db, "books", id);
    await deleteDoc(bookDoc);
  };
}
export default new BooksService();
