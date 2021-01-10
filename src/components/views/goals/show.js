import React, { useState, useEffect } from 'react';
import Wrapper from '../../partials/Wrapper';
import { db } from '../../../services/firebase';
import ViewHeader from '../../misc/ViewHeader';
import { Link, useParams } from 'react-router-dom';
import { v4 } from 'uuid';

const GoalShow = () => {

    const [goal, setGoal] = useState()
    const { _userId, _goalId } = useParams()

    useEffect(() => {

        db.collection('goals').doc(_goalId).get()
        .then( snapshot => {
            setGoal(snapshot.data())
        })
        .catch(error => {
            console.log(error);
        })
    // eslint-disable-next-line
    }, [])

    return(

        <Wrapper>

            <ViewHeader title="View Goal" />

            <div className="row">

            <div className="d-flex justify-content-end w-100 mb-3">
                <Link to={`/${_userId}/goals`}>
                    <button type="button" className="btn btn-success">
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back to goals 
                    </button>
                </Link>
            </div>

                <div className="col-10 mx-auto">

                    {goal && <>

                    <h3>{goal.text}</h3>

                    <br/>

                    <h5>Rating</h5>

                    <h6 className="card-subtitle mb-2 text-muted">
                        {
                            [
                                ...Array(goal.rating),
                            ].map(() => (   
                                <span key={v4()} className="fa fa-star text-warning"></span>   
                            ))
                        }   
                        <small className="ml-3">{goal.rating}/5</small>
                    </h6>

                    <br/>

                    <div className="mt-3">
                        <h5>Employee's Comments</h5>

                        <div>{goal.comments.employee}</div>
                    </div>

                    <br/>

                    <div className="mt-3">

                        <h5>Supervisor's Comments</h5>

                        <div>{goal.comments.supervisor}</div>

                    </div>

                    </>}
                    
                </div>

            </div>

        </Wrapper>

    )
    
}

export default GoalShow