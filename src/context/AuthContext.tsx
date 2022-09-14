import React,{ createContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebaseSetup';
import { FirebaseError } from 'firebase/app';

export const AuthContext = createContext<any | null>(null);

export default function AuthProvider({ children }:any) {
  const [ user, setUser ] = useState<User |null>(null);
  const [ error, setError ] = useState<FirebaseError | null>(null);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (currentUser) => {
    setLoading(true)
    setUser(currentUser);
    setLoading(false)
  })

  const signup = async (email:string,password:string) => {
    try {
      const currentUser = await createUserWithEmailAndPassword(auth,email,password)
      setUser(currentUser.user)
    } catch (e) {
      console.log(e);
    }
  }

  const login = async (email:string,password:string) => {
    try {
      const currentUser = await signInWithEmailAndPassword(auth,email,password)
      setUser(currentUser.user)
    } catch (e) {
      console.log(e);
    }
  }

  const signout = async () => {
    try {
      await signOut(auth)
    } catch (e) {
      console.log(e);
    }
  }

  const googleSignIn = async () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(() => {

    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <AuthContext.Provider value={{ user , signup, signout, googleSignIn, loading, login }}>
      {children}
    </AuthContext.Provider>
  )
}
