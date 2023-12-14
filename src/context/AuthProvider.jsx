/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
// const auth = getAuth(app);
const gitProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // ========= user register email & password ============
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // === Sign in ==============
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ========= create google user  ============
  const getGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // =========  create gitHub user ============
  const gitHubLogin = () => {
    return signInWithPopup(auth, gitProvider);
  };
  // =========  create microsoft user ============
  const getMicrosoftLogin = () => {
    return signInWithPopup(auth, microsoftProvider);
  };
  // =========  Log out ============
  const logOut = () => {
    return signOut(auth);
  };

  // =========  Log out ============
  // const getResetPassword = () => {
  //   return sendPasswordResetEmail(auth);
  // };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  const authentications = {
    createUser,
    singIn,
    user,
    logOut,
    gitHubLogin,
    getGoogleLogin,
    getMicrosoftLogin,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
