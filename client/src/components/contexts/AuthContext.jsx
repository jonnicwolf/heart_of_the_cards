// import React, { useContext, useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 


// const AuthContext = React.createContext();
// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   const signup = async (email,password) => {
//     try {
//       const {data,error} = await supabase.auth.signUp({
//         email,
//         password,
//       });
//       if (error) throw error;

//       return data;
//     } catch (error) {
//       console.error(`Error creating user. ${ error.message }`)
//     };
//   };

//   const login = async (email, password) => {
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       if (error) throw error;

//       return data;
//     }
//     catch (error) {
//       console.error("Error signing in with password and email", error);
//       alert(error);
//     };
//   };

//   const logout = async () => {
//     try {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
//       setCurrentUser(null);
//     }
//     catch (error) {
//       console.error("Error signing out", error);
//     };
//   };

//   const resetPassword = async (email) => {
//     try {
//       const { data, error } = await supabase.auth.resetPasswordForEmail(email);
//       if (error) throw error;

//       return data;
//     } catch (error) {
//       console.error(`Error resetting password: ${error.message}`);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//         options: {
//           redirectTo: window.location.origin,
//         },
//       });

//       if (error) throw error;
//       return data;
//     }
//     catch (err) { console.error(err) };
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, user => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     loading,
//     login,
//     logout,
//     signup,
//     resetPassword,
//     signInWithGoogle
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children }
//     </AuthContext.Provider>
//   );
// };

import React, { useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
      throw error; // Re-throw so calling component can handle it
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
      throw error; // Re-throw so calling component can handle it
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      // Note: setCurrentUser will be handled by the auth state change listener
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
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setCurrentUser(session?.user || null);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setCurrentUser(session?.user || null);
        setLoading(false);
      }
    );

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, []);

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