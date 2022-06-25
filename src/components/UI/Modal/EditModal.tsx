import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>{props.title}</header>
      <div className={styles.content}>
        <form onSubmit={null}>
          <div className="new-book__controls">
            <div className={`new-book__control `}>
              <label htmlFor="bookName">Book Name</label>
              <input type="text" />
            </div>
            <div className={`new-book__control`}>
              <label htmlFor="pageNumber">Page Number</label>
              <input type="number" min="0" step="1" />
            </div>
            <div className={`new-book__control`}>
              <label htmlFor="startDate">Start Date</label>
              <input type="date" min="2019-01-01" max="2030-01-01" />
            </div>
            <div className="new-book__actions">
              <Button type="submit">Add Book</Button>
              <Button onClick={props.onCancel}>Cancel</Button>
            </div>
          </div>
        </form>
      </div>
      <footer>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const EditModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default EditModal;
