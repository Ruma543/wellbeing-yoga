import React, { Children, createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/yoga.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  const authInfo = { services };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
