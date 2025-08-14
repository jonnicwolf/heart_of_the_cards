import React, { useContext, useEffect, useState } from 'react';
import { supabase } from "../../supabaseClient";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = async (email,password) => {
    try {
      const {data,error} = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;

      return data;
    } catch (error) {
      console.error(`Error creating user. ${ error.message }`)
    };
  };

  const login = async (email, password) => {
    try {
      logEvent(analytics, 'log_in');
      return await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
      console.error("Error signing in with password and email", error);
      alert(error);
    };
  };

  const logout = () => signOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(email);

  const signInWithGoogle = async () => {
    try {
      logEvent(analytics, 'sign_in_with_google');
      await signInWithPopup(auth, googleProvider);
    }
    catch (err) { console.error(err) };
  };

  const signInAnon = async () => {
    try {
      logEvent(analytics, 'sign_in_anon');
      await signInAnonymously(auth);
    }
    catch (error) { console.error(`Error signing in anonymously: ${error}`) };
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    logout,
    signup,
    resetPassword,
    signInWithGoogle,
    signInAnon,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children }
    </AuthContext.Provider>
  );
};
