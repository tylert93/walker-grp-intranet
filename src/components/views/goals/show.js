import React, { useState, useEffect } from 'react';
import Wrapper from '../../partials/Wrapper';
import {db} from '../../../services/firebase';

const GoalShow = (props) => {

    const [goal, setGoal] = useState()

    useEffect(() => {

        db.collection('goals').doc(props._id)
        .get()
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

            <div className="container">

                <div className="row">

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
                                    <span className="fa fa-star text-warning"></span>   
                                ))
                            }   
                            <small className="ml-3">{goal.rating}/5</small>
                        </h6>

                        <br/>

                        <h5>Employee's Comments</h5>

                        <div>{goal.comments.employee}</div>

                        <br/>

                        <h5>Supervisor's Comments</h5>

                        <div>{goal.comments.supervisor}</div>

                        </>}
                        
                    </div>

                </div>

            </div>

        </Wrapper>

    )
    
}

export default GoalShow