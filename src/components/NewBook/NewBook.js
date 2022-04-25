import BookForm from "./BookForm";
import "./NewBook.css";

const NewBooks = (props) => {
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = { ...enteredBookData, id: Math.random() };
    props.onAddBook(bookData);
  };

  return (
    <div className="new-book">
      <BookForm onSaveBookData={saveBookDataHandler} />
    </div>
  );
};

export default NewBooks;
