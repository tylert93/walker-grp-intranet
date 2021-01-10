import React, { useState, useContext, useEffect } from 'react'
import { auth, db } from '../services/firebase';
import { toast } from 'react-toastify';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()
    const [currentUserInfo, setCurrentUserInfo] = useState()
    const [loading, setLoading] = useState(true)

    const signUpUser = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const logUserIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const resetUserPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const createUser = (email, name, admin) => {

        db.collection('users').doc(email)
            .set({
                avatar: 'https://firebasestorage.googleapis.com/v0/b/wg-intranet.appspot.com/o/avatars%2Ftom.tyler%40walkergrp.co.uk?alt=media&token=1666db53-699f-47b3-8d05-fb3fdeced3bf',
                admin: admin,
                contactInfo: {
                    direct: '-',
                    ext: '-',
                    personalEmail: '-',
                    mobile: '-',
                },
                createdAt: new Date(),
                email:email,
                emergencyContact: {
                    name: '-',
                    email: '-',
                    mobile: '-'
                },
                manager:'None',
                manages:[],
                name: name,
                roleTitle: '-',
                roleScope:'-'   
                
            });
    }

    const updateCurrentUserInfo = async () => {

        try{
            const fetchUser = await db.collection('users').doc(currentUser.email).get()
            let values = fetchUser.data()
            values.id = fetchUser.id
            setCurrentUserInfo(values)
        }catch(error) {
            toast.error("Could not find user information", {autoClose:false, position: toast.POSITION.TOP_CENTER})
            console.log(error)
        }

    }

    useEffect( () =>{

        const unsubscribe = auth.onAuthStateChanged(user => {
             setCurrentUser(user)
             setLoading(false)
             
            db.collection('users').doc(user.email)
                .get()
                .then(doc => {
                    let values = doc.data()
                    values.id = doc.id 
                   setCurrentUserInfo(values)
                })
                .catch(error => {
                    console.log(error)
                })
        });
     
        return unsubscribe

     }, [])

    const value = {
        currentUser,
        currentUserInfo,
        updateCurrentUserInfo,
        signUpUser,
        logUserIn,
        logout,
        resetUserPassword,
        createUser
    }

    return(
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )

}

export default AuthProvider