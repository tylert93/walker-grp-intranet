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
                created_at: new Date(),
                name: name,
                role: '-',
                email:email,
                manager:'-',
                admin: admin,
                contactInfo: {
                    direct: '-',
                    ext: '-',
                    personalEmail: '-',
                    mobile: '-',
                },
                emergencyInfo: {
                    name: '-',
                    email: '-',
                    mobile: '-'
                }
            });
    }

    useEffect( () =>{

        const unsubcribe = auth.onAuthStateChanged(async user => {

            setCurrentUser(user)

            if(user){

                try{
                    const test = await db.collection('users').doc(user.email).get()
                    setCurrentUserInfo(test.data())
                }catch(error) {
                    toast.error("Could not find user information", {autoClose:false, position: toast.POSITION.TOP_CENTER})
                    console.log(error)
                }

            }

            setLoading(false)
              
           
        });
     
        return unsubcribe

    }, [])

    const value = {
        currentUser,
        currentUserInfo,
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