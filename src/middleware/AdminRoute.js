import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = ({ component: Component, ...rest}) => {

    const { currentUser, currentUserInfo } = useAuth();

    return (
        <Route
            {...rest}
            render={props =>{
                if(currentUser && currentUserInfo && currentUserInfo.admin){
                    return(
                        <Component {...props} />
                    )
                } else {
                    return(
                        <Redirect to="/" />
                    )
                }
            }}
        >
        </Route>
    )

}

export default AdminRoute