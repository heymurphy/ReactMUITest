import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Create Context
const AuthContext = createContext(null);

// Custom Hook for easy access
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data (including username) from Firestore
  const fetchUserData = async (user) => {
    if (!user) return null;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() : null;
  };

  // Listen for Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await fetchUserData(user);
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          name: userData?.name || "",
          username: userData?.username || "",
          profilePicture: userData?.profilePicture || "",
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup
  }, []);

  // Signup Function (Stores Name, Username, and Profile Picture)
  const signup = async (email, password, name, username = "", profilePicture = "") => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      username,
      profilePicture,
      email,
    });

    return user;
  };

  // Login Function
  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout Function
  const logout = async () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, signup }}>
      {!loading && children} {/* Prevent rendering before Firebase is ready */}
    </AuthContext.Provider>
  );
};
