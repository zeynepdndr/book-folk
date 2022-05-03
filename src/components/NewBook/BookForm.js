import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./BookForm.css";

const BookForm = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredPage, setEnteredPage] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [enteredNameError, setEnteredNameError] = useState(false);
  const [enteredPageError, setEnteredPageError] = useState(false);
  const [enteredDateError, setEnteredDateError] = useState(false);
  var isFormValid = !enteredDateError && !enteredNameError && !enteredPageError;

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredPage: "",
    enteredDate: "",
  });

  const nameChangeHandler = (event) => {
    //pass in a function to setState
    //it will receives snapshot of the previous state, safer way to get latest state
    if (event.target.value.trim.lengt == 0) setEnteredNameError(true);
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

  const errorHandler = () => {
    if (userInput.enteredName == "") {
      setEnteredNameError(true);
      isFormValid = false;
    }
    if (userInput.enteredPage == "") {
      setEnteredPageError(true);
      isFormValid = false;
    }
    if (userInput.enteredDate == "") {
      setEnteredDateError(true);
      isFormValid = false;
    }
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
    <>
      <ErrorModal title="nono" message={"how can you do that"}></ErrorModal>
      <form onSubmit={submitHandler}>
        <div className="new-book__controls">
          <div
            className={`new-book__control ${enteredNameError ? "invalid" : ""}`}
          >
            <label htmlFor="bookName">Book Name</label>
            <input
              type="text"
              value={userInput.enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div
            className={`new-book__control ${enteredPageError ? "invalid" : ""}`}
          >
            <label htmlFor="pageNumber">Page Number</label>
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
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2030-01-01"
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-book__actions">
            <Button type="submit">Add Book</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookForm;
