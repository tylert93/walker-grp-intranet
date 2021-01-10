import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../services/firebase';

const CurrGoalCard = (props) => {

    const { _userId } = useParams()
    const { currentUserInfo } = useAuth()
    const [user, setUser] = useState()
    
    const fetchUser = async () => {

        try{
            const fetchInfo = await db.collection('users').doc(_userId).get()
            setUser(fetchInfo.data())
        }catch(error){
            console.log(error)
        }

    }

    const renderLink = (goalId) => {

        if(user && user.manager === currentUserInfo.name){
            return(
                <Link to={`/${_userId}/goals/${goalId}/edit`}>
                    <button type="button" className="btn btn-primary btn-sm">
                        <i className="fas fa-graduation-cap mr-2"></i>
                        Assess
                    </button>
                </Link>
            )
        }

    }

    useEffect(() => {

        fetchUser()

    }, [])
    
    return(
        
        <div className="card box-shadow my-3">

            <div className="card-body pb-0">
                <h5 className="card-title">{props.text}</h5>
            </div>
            
            <div className="card-footer bg-white border border-white">

               {renderLink(props.id)}
                
            </div>
            
        </div>
        
    )
    
}

export default CurrGoalCard