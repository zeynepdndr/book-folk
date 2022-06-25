import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import AuthContext from "./auth-context";
import { auth } from "../firebase-config";

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const signupHandler = async (email, password) => {
    try {
      const userCredantial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredantial.user;
      console.log("User created", user);
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

        setUser(user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/email-already-in-use") {
        alert("Email already in use");
      } else if (errorCode === " ") {
        alert("User not found");
      } else {
        alert(errorMessage);
      }
    }
  };
  const loginHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
        setIsLoggedIn(true);
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
  const logoutHandler = async () => {
    await auth.signOut();
    setUser(null);
    setIsLoggedIn(false);
  };
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onSignup: signupHandler,
        user: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
