"use client";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isPopUp, SetIsPopUp] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogIn, setIsLogIn, isPopUp, SetIsPopUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
