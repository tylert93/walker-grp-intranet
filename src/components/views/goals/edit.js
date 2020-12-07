import React, { useState, useEffect } from 'react';
import Wrapper from '../../partials/Wrapper';
import {Link} from '@reach/router';
import {db} from '../../../services/firebase';
import '../../../css/goals/update.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';

const UpdateGoal = (props) => {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(1)
    const [employeeComments, setEmployeeComments] = useState('')
    const [supervisorComments, setSupervisorComments] = useState('')

    useEffect(() => {

        db.collection('goals').doc(props._id).get()
        .then( snapshot => {
            setText(snapshot.data().text)
        })
        .catch(error => {
            console.log(error);
        })
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

    const updateGoal = () => {

        db.collection('goals').doc(props.id).update({
            rating: rating,
            "comments.employee": employeeComments,
            "comments.supervisor": supervisorComments,
            complete: true 
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch(error => {
            console.log(error);
        })

    }
    
    return (

        <Wrapper>

            <div className="container">

                <h3>Review this goal</h3>
                
                <div className="form-container col-10 mt-5 mx-auto">

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

                        <Link to="/username/goals">
                            <button type="submit" className="btn btn-primary" onClick={updateGoal}>Submit</button>
                        </Link>

                    </form>

                </div>

            </div>

        </Wrapper>

    )
    
}

export default UpdateGoal