import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { db } from '../../../services/firebase';
import Wrapper from '../../partials/Wrapper';
import PrevGoalCard from '../../goals/PrevGoalCard';
import CurrGoalCard from '../../goals/CurrGoalCard';
import { v4 } from 'uuid';
import '../../../css/goals/index.css';

const GoalIndex = () => {

    const [goals, setGoals] = useState()

    useEffect(() => {

        db.collection('goals').where("userId", "==", 'tom.tyler@walkergrp.co.uk').orderBy("created", "desc")
        .get()
        .then( snapshot => {
            const goals = [];
            snapshot.forEach(doc => {
                const keys = doc.data();
                keys.id = doc.ref.id;
                goals.push(keys);
            })
            setGoals(goals);
        })
        .catch(error => {
            console.log(error);
        })
    // eslint-disable-next-line    
    }, [])

    return (

        <Wrapper>

            <div className="container">

                <div className="d-flex justify-content-between">
                    <h3>Goals</h3>
                    <Link to="/username/goals/new">
                        <button type="button" className="btn btn-success">
                            <i className="fas fa-plus mr-2"></i>
                            Set goals 
                        </button>
                    </Link>
                </div>

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

            </div>

        </Wrapper>

    )
    
    
}

export default GoalIndex