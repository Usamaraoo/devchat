import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProiver = ({ children }) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    console.log("auth", auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
