import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    // email and password auth
    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign-in
    const logInUser = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user', currentUser)
        })
        return unsubscribe();
    },[])

    const authInfo ={ user, createUser, logInUser}
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default UserContext;