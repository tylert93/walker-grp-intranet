import React, { useState, useEffect } from 'react';
import Wrapper from '../../partials/Wrapper';
import { Link, useParams, useHistory } from 'react-router-dom';
import { db } from '../../../services/firebase';
import ViewHeader from '../../misc/ViewHeader';
import '../../../css/goals/update.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';

const UpdateGoal = (props) => {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(1)
    const [employeeComments, setEmployeeComments] = useState('')
    const [supervisorComments, setSupervisorComments] = useState('')
    const { _userId, _goalId } = useParams()
    const history = useHistory()

    const fetchGoal = async () => {
        try{
            const fetchInfo = await db.collection('goals').doc(_goalId).get()
            setText(fetchInfo.data().text)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {

       fetchGoal() 
     
    // eslint-disable-next-line   
    }, [])

    const changeRating = (value) => {
        setRating(value);
    }

    const changeEmployeeComments = (value) => {
        setEmployeeComments(value);
    }

    const changeSupervisorComments = (value) => {
        setSupervisorComments(value);
    }

    const updateGoal = async () => {

        try{
            await db.collection('goals').doc(_goalId).update({
                "rating": rating,
                "comments.employee": employeeComments,
                "comments.supervisor": supervisorComments,
                "complete": true 
            })
            history.push(`/${_userId}/goals`)
        }catch(error){
            console.log(error);
        }

    }
    
    return (

        <Wrapper>

            <ViewHeader title="Review Goal" />

            <div className="row">

                <div className="d-flex justify-content-end w-100 mb-3">
                    <Link to={`/${_userId}/goals`}>
                        <button type="button" className="btn btn-success">
                            <i className="fas fa-arrow-left mr-2"></i>
                            Back to goals 
                        </button>
                    </Link>
                </div>
            
                <div className="form-container col-10 mx-auto">

                    <h4>{text}</h4>

                    <br/>

                    <form>
                        <div className="form-group">
                            <label htmlFor="rating"><strong>Rating</strong></label>
                            <small className="d-block mb-2">To what degree have you achieved this goal?</small>
                            <div className="rating">
                                <FontAwesomeIcon icon={rating > 4 ? solidStar : emptyStar} size='lg' className={`mx-1 ${rating > 4 ? 'gold' : 'grey'}`} onClick={() => {changeRating(5)}}/>
                                <FontAwesomeIcon icon={rating > 3 ? solidStar : emptyStar} size='lg' className={`mx-1 ${rating > 3 ? 'gold' : 'grey'}`} onClick={() => {changeRating(4)}}/>
                                <FontAwesomeIcon icon={rating > 2 ? solidStar : emptyStar} size='lg' className={`mx-1 ${rating > 2 ? 'gold' : 'grey'}`} onClick={() => {changeRating(3)}}/>
                                <FontAwesomeIcon icon={rating > 1 ? solidStar : emptyStar} size='lg' className={`mx-1 ${rating > 1 ? 'gold' : 'grey'}`} onClick={() => {changeRating(2)}}/>
                                <FontAwesomeIcon icon={rating > 0 ? solidStar : emptyStar} size='lg' className={`mx-1 ${rating > 0 ? 'gold' : 'grey'}`} onClick={() => {changeRating(1)}}/>
                            </div>
                        </div>

                        <br/>

                        <div className="form-group">
                            <label htmlFor="employee-comments"><strong>Employee's Comments</strong></label>
                            <small className="d-block mb-2">How did you achieve it, could you have improved?</small>
                            <textarea className="form-control" id="employee-comments" aria-describedby="employee-comments" value={employeeComments} onChange={e => {changeEmployeeComments(e.target.value)}}></textarea>
                        </div>

                        <br/>

                        <div className="form-group">
                            <label htmlFor="supervisor-comments"><strong>Supervisor's Comments</strong></label>
                            <small className="d-block mb-2">How do you think they performed?</small>
                            <textarea className="form-control" id="supervisor-comments" aria-describedby="supervisor-comments" value={supervisorComments} onChange={e => {changeSupervisorComments(e.target.value)}}></textarea>
                        </div>

                    </form>

                    <button className="btn btn-primary" onClick={updateGoal}>Submit</button>

                </div>

            </div>

        </Wrapper>

    )
    
}

export default UpdateGoal