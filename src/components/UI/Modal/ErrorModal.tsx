import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>{props.title}</header>
      <div className={styles.content}>
        {/* <p>{props.message}</p> */}
        {props.children}
      </div>
      <footer className={styles.actions}>
        <Button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </Button>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
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
          onClose={props.onClose}
          children={props.children}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
