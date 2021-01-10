import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../services/firebase';
import Wrapper from '../../partials/Wrapper';
import PrevGoalCard from '../../goals/PrevGoalCard';
import CurrGoalCard from '../../goals/CurrGoalCard';
import { useAuth } from '../../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import ViewHeader from '../../misc/ViewHeader';
import '../../../css/goals/index.css';

const GoalIndex = () => {

    const [goals, setGoals] = useState()
    const { _userId } = useParams()
    const { currentUserInfo } = useAuth()
    const [user, setUser] = useState()

    const fetchUser = async () => {
        try{
            const fetchUserInfo = await db.collection('users').doc(_userId).get()
            setUser(fetchUserInfo.data())
        }catch(error){
            console.log(error)
        }
    }

    const fetchGoals = async () => {
        try{
            const fetchInfo = await db.collection('goals').where("userId", "==", _userId).orderBy("created", "desc").get()
            let goalsArray = []
            fetchInfo.forEach(doc => {
                const keys = doc.data();
                keys.id = doc.ref.id;
                goalsArray.push(keys);
            })
            setGoals(goalsArray);
        }catch(error){
            console.log(error)
        }
    }

    const renderLink = () => {
        if(user && user.manager === currentUserInfo.name){
            return(
                <div className="d-flex justify-content-between">

                    <h4>{user.name}</h4>
                    
                    <Link to={`/${_userId}/goals/new`}>
                        <button type="button" className="btn btn-success">
                            <i className="fas fa-plus mr-2"></i>
                            Set goal 
                        </button>
                    </Link>
                </div>
            )
        }
    }

    useEffect(() => {

        fetchUser()
        fetchGoals()
        
    // eslint-disable-next-line    
    }, [])

    return (

        <Wrapper>

            <ViewHeader title="Goals" />

            <div className="d-flex justify-content-end">
                    
            </div>

            {renderLink()}

            <div className="card mt-5">
                <div className="card-body bg-blue text-white">
                    <h5 className="text-shadow m-0">Current</h5>
                </div>
                <div className="card-body">
                    <div className="row d-flex justify-content-start">
                        {
                            goals &&
                            goals.map(goal => {
                                return(
                                    !(goal.complete) &&
                                    <div key={v4()} className="card-group col-12 col-lg-6 col-xl-4">
                                        <CurrGoalCard
                                            id={goal.id}
                                            text={goal.text}
                                        />
                                    </div>
                                )
                            })
                            
                        }
                    </div>
                </div>
            </div>

            <div className="card mt-5">
                <div className="card-body bg-purple text-white">
                    <h5 className="text-shadow m-0">Previous</h5>
                </div>
                <div className="card-body">
                    <div className="row d-flex justify-content-start">
                        {
                            goals &&
                            goals.map(goal => {
                                return(
                                    goal.complete &&
                                    <div key={v4()} className="card-group col-12 col-lg-6 col-xl-4">
                                        <PrevGoalCard
                                            id={goal.id} 
                                            text={goal.text}
                                            rating={goal.rating}
                                            comments={goal.comments} 
                                        />
                                    </div>
                                )
                            })
                            
                        }
                    </div>
                </div>
            </div>

        </Wrapper>

    )
    
    
}

export default GoalIndex