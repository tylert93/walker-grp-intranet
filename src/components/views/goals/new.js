import React, { useState } from 'react';
import { Link } from '@reach/router';
import { db } from '../../../services/firebase';
import Wrapper from '../../partials/Wrapper';
import { useAuth } from '../../../contexts/AuthContext';
import ViewHeader from '../../misc/ViewHeader';
import '../../../css/goals/create.css';

const CreateGoals = (props) =>{

    const { currentUser } = useAuth();
    const [goalOneText, setGoalOneText] = useState()
    const [goalTwoText, setGoalTwoText] = useState()
    const [goalThreeText, setGoalThreeText] = useState()

    const onGoalOneChange = (value) => {
        setGoalOneText(value);
    }

    const onGoalTwoChange = (value) => {
        setGoalTwoText(value);
    }

    const onGoalThreeChange = (value) => {
        setGoalThreeText(value);
    }

    const createNewGoals = () => {

        try{

            db.collection('goals')
            .add({
                userId: currentUser.email,
                created: new Date(),
                text: goalOneText,
                rating: null,
                comments: {
                    author: '',
                    supervisor: ''
                },
                complete: false
            })

            db.collection('goals')
            .add({
                userId: props.username,
                created: new Date(),
                text: goalTwoText,
                rating: null,
                comments: {
                    author: '',
                    supervisor: ''
                },
                complete: false
            })
                
            db.collection('goals')
            .add({
                userId: props.username,
                created: new Date(),
                text: goalThreeText,
                rating: null,
                comments: {
                    employee: '',
                    supervisor: ''
                },
                complete: false
            })

        } catch(error) {
            console.log(error)
        } 
    
    }
    
    return (

        <Wrapper>

            <ViewHeader title="Set Goals" />

            <div className="row">

                <div className="form-container col-10 mx-auto">
                    <form>
                        <div className="form-group">
                            <label htmlFor="goal-1"><strong>Goal #1</strong></label>
                            <textarea className="form-control" id="goal-1" aria-describedby="goal-1" value={goalOneText} onChange={e => {onGoalOneChange(e.target.value)}}></textarea>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="goal-2"><strong>Goal #2</strong></label>
                            <textarea className="form-control" id="goal-2" aria-describedby="goal-2" value={goalTwoText} onChange={e => {onGoalTwoChange(e.target.value)}}></textarea>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="goal-3"><strong>Goal #3</strong></label>
                            <textarea className="form-control" id="goal-3" aria-describedby="goal-3" value={goalThreeText} onChange={e => {onGoalThreeChange(e.target.value)}}></textarea>
                        </div>
                        <Link to="/username/goals">
                            <button type="submit" className="btn btn-primary" onClick={createNewGoals}>Submit</button>
                        </Link>
                    </form>
                </div>

            </div>

        </Wrapper>

    )
    
}

export default CreateGoals