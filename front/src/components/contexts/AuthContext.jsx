import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../../../firebase.js'

const AuthContext = React.createContext()
export const useAuth =() => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email,password) => auth.createUserWithEmailAndPassword(email,password);
  const login = (email,password) => auth.signInWithEmailAndPassword(email, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  )
}
