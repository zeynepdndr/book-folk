import { useState } from "react";
import "./BookForm.css";

const BookForm = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredPage, setEnteredPage] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [enteredNameError, setEnteredNameError] = useState(false);
  const [enteredPageError, setEnteredPageError] = useState(false);
  const [enteredDateError, setEnteredDateError] = useState(false);
  const isFormValid =
    !enteredDateError && !enteredNameError && !enteredPageError;

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredPage: "",
    enteredDate: "",
  });

  const nameChangeHandler = (event) => {
    //pass in a function to setState
    //it will receives snapshot of the previous state, safer way to get latest state
    setEnteredNameError(false);
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
    // setUserInput({ ...userInput, enteredName: event.target.value });
    // setEnteredName(event.target.value);
  };

  const pageChangeHandler = (event) => {
    setEnteredPageError(false);
    setUserInput({ ...userInput, enteredPage: event.target.value });
    // setEnteredPage(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDateError(false);
    setUserInput({ ...userInput, enteredDate: event.target.value });
    // setEnteredDate(event.target.value);
  };

  const checkNameError = () => {
    //check if name is empty
    if (userInput.enteredName.length === 0) {
      setEnteredNameError(true);
    } else {
      setEnteredNameError(false);
    }
  };

  const checkDateError = () => {
    //check if date is empty
    if (userInput.enteredDate.length === 0) {
      setEnteredDateError(true);
    } else {
      setEnteredDateError(false);
    }
  };

  const checkPageError = () => {
    //check if page is empty
    if (userInput.enteredPage.length === 0) {
      setEnteredPageError(true);
    } else {
      setEnteredPageError(false);
    }
  };

  const errorHandler = (event) => {
    checkNameError();
    checkDateError();
    checkPageError();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    errorHandler();

    if (!isFormValid) {
      return;
    }

    const BookData = {
      id: Math.random().toString(),
      name: userInput.enteredName,
      page: +userInput.enteredPage,
      startDate: new Date(userInput.enteredDate),
    };

    props.onSaveBookData(BookData);
    setUserInput({ enteredName: "", enteredPage: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-book__controls">
        <div
          className={`new-book__control ${enteredNameError ? "invalid" : ""}`}
        >
          <label>Book Name</label>
          <input
            type="text"
            value={userInput.enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div
          className={`new-book__control ${enteredPageError ? "invalid" : ""}`}
        >
          <label>Page Number</label>
          <input
            type="number"
            min="0"
            step="1"
            value={userInput.enteredPage}
            onChange={pageChangeHandler}
          />
        </div>
        <div
          className={`new-book__control ${enteredDateError ? "invalid" : ""}`}
        >
          <label>Start Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-01-01"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-book__actions">
          <button type="submit">Add Book</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
