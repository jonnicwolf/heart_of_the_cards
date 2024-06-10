import React, { useContext, useEffect, useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged ,} from '../../../firebase.js';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = async (email,password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) { console.error('Error creating user. Please try again.') }
  }
  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in with password and email", error);
      alert(error);
    }
  };
  const logout = () => signOut();
  const resetPassword = (email) => sendPasswordResetEmail(email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    signup,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  );
};
