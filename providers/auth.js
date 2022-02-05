import React, { useState, useEffect, useContext } from 'react';
import { app } from '../firebase/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const AuthContext = React.createContext();

const auth = getAuth();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return 'success';
    } catch (error) {
      return error.code;
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return 'success';
    } catch (error) {
      return error.code;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser);
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};
