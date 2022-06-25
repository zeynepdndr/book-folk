import React from "react";

//AuthContext is not a component, but a helper class to provide the auth context to the store
const AuthContext = React.createContext({
  isLoggedIn: false,
  user: {},
  onLogout: () => {},
  onLogin: (email, password) => {},
  onSignup: (email, password) => {},
});

export default AuthContext;
