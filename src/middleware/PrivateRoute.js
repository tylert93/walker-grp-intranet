import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const PrivateRoute = ({ component: Component, ...rest}) => {

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props =>{

                return currentUser ? <Component {...props} /> 

                : (<>

                {toast.error("You must be logged in to access that page", {autoClose:false, position: toast.POSITION.TOP_CENTER})}
                <Redirect to="/" />
                
                </>)
            }}
        >
        </Route>
    )

}

export default PrivateRoute