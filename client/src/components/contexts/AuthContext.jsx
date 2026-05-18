import React, { useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      return data;
    } catch (error) {
      console.error(`Error creating user: ${error.message}`);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error signing in with password and email:", error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // setCurrentUser handled by listener
    } catch (error) {
      console.error("Error signing out:", error.message);
      throw error;
    }
  };

  const resetPassword = async (email) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      return data;
    } catch (error) {
      console.error(`Error resetting password: ${error.message}`);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}`, // must also be in Supabase dashboard
        },
      });
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error;
    }
  };

  // useEffect(() => {
  //   const getInitialSession = async () => {
  //     if (window.location.hash || window.location.search.includes("code=")) {
  //     const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href);
  //     if (error) console.error("Error exchanging code:", error);
  //     else console.log("OAuth exchange success:", data);
  //   }

  //     const { data: { session }, error } = await supabase.auth.getSession();

  //     if (!session || error) {
  //       const { data: userData, error: userError } = await supabase.auth.getUser();
  //       console.log("getUser result:", userData, "Error:", userError);
  //       setCurrentUser(userData?.user || null);
  //     } else setCurrentUser(session.user);

  //     setLoading(false);
  //   };

  //   getInitialSession();

    // Listen for auth changes
  //   const { data: { subscription } } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       setCurrentUser(session?.user || null);
  //       setLoading(false);
  //     }
  //   );

  //   return () => subscription.unsubscribe();
  // }, []);

  const value = {
    currentUser,
    loading,
    login,
    logout,
    signup,
    resetPassword,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
