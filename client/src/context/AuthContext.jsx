import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, handleLogin, handleLogout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
