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
    case "USER_INPUT":
      return { value: action.payload, isValid: action.payload.includes("@") };
    case "INPUT_BLUR":
      return {
        value: state.value,
        isValid: state.value.includes("@"),
      };
    default:
      return { value: "", isValid: null };
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 5,
      };
    case "INPUT_BLUR":
      return {
        value: state.value,
        isValid: state.value.trim().length > 5,
      };
    default:
      return { value: "", isValid: null };
  }
};

const Login = (props) => {
  const [user, setUser] = useState(null);
  // const [enteredEmail, setEnteredEmail] = useState("");

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailState.value,
        passwordState.value
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
    // setEnteredEmail(event.target.value);
    console.log("ech:", event.target.value);
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    console.log("pch:", event.target.value);

    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
    setFormIsValid(event.target.value.trim().length > 5 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    //No need to add a value here, it is about that input lost focus
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailState.value, passwordState.value)
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
    setFormIsValid(passwordState.isValid && emailState.isValid);
  }, [emailState.value, passwordState.value]);

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
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
