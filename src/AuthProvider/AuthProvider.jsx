import React, { Children, createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from '../Firebase/firebase';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);
  useEffect(() => {
    fetch('/yoga.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  const authInfo = {
    services,
    createUser,
    loginUser,
    logOut,
    user,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
