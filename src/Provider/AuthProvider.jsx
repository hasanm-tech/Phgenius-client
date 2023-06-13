import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { app } from './../firebase/firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)



    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    const signUp = (email,pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signIn = (email,pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser , {
            displayName : name,
            photoURL : photo,
        })
    } 


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)


            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        logOut,
        userUpdate,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;