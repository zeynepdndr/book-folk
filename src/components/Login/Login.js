import { useEffect, useReducer, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";

const emailReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: action.payload.includes("@"),
      };
    default:
      return { value: "", isValid: null };
  }
};

const Login = (props) => {
  const [user, setUser] = useState(null);
  const [enteredEmail, setEnteredEmail] = useState("");

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailState.value,
        enteredPassword
      );
      console.log("User created", user);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        alert(errorMessage);
      }
    }
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 0
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "INPUT_CHANGE",
      payload: enteredEmail,
      isValid: enteredEmail.includes("@"),
    });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailState.value, enteredPassword)
      .then((user) => {
        console.log(user);
        setUser(user);
        props.onLogin();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  useEffect(() => {
    setFormIsValid(enteredPassword.length > 6 && emailState.isValid);
  }, [enteredEmail, enteredPassword]);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      console.log("currentUser", currentUser);
      setUser(currentUser);
    });
  }, []);

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.payload}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button
            onClick={register}
            className={styles.btn}
            disabled={!formIsValid}
          >
            Register
          </Button>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
