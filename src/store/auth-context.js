import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";

//AuthContext is not a component, but a helper class to provide the auth context to the store
const AuthContext = React.createContext({
  isLoggedIn: false,
  user: {},
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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
    setIsLoggedIn(false);
  };
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      console.log("currentUser", currentUser);
      setUser(currentUser);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        user: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
