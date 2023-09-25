import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createUser, 
        googleSignIn 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;