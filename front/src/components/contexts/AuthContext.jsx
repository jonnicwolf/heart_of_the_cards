import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
const AuthContext = React.createContext()


export const useAuth =() => useContext(AuthContext)


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email,password) => auth.createUserWithEmailAndPassword(email,password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));
    return unsubscribe;
  });

  const value = { currentUser,  };
  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  )
}
