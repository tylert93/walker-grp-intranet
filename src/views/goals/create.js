import React from 'react';
import {Link} from '@reach/router';
import {db} from '../../services/firebase';
import Wrapper from '../partials/Wrapper';
import '../../css/goals/create.css';

class CreateGoals extends React.Component{

    state = {
        goalOneText: '',
        goalTwoText: '',
        goalThreeText: ''
    }

    onGoalOneChange = (value) => {
        this.setState({goalOneText: value});
    }

    onGoalTwoChange = (value) => {
        this.setState({goalTwoText: value});
    }

    onGoalThreeChange = (value) => {
        this.setState({goalThreeText: value});
    }

    createNewGoals = () => {
        db.collection('goals')
            .add({
                userId: this.props.username,
                created: new Date(),
                text: this.state.goalOneText,
                rating: null,
                comments: {
                    author: '',
                    supervisor: ''
                },
                complete: false
            });

            db.collection('goals')
            .add({
                userId: this.props.username,
                created: new Date(),
                text: this.state.goalTwoText,
                rating: null,
                comments: {
                    author: '',
                    supervisor: ''
                },
                complete: false
            });
            
            db.collection('goals')
            .add({
                userId: this.props.username,
                created: new Date(),
                text: this.state.goalThreeText,
                rating: null,
                comments: {
                    author: '',
                    supervisor: ''
                },
                complete: false
            });
    }

    render(){
        return (
 
                <Wrapper>

                    <div className="container">

                        <div className="row">

                            <div className="form-container col-10 mx-auto">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="goal-1"><strong>Goal #1</strong></label>
                                        <textarea className="form-control" id="goal-1" aria-describedby="goal-1" value={this.state.goalOneText} onChange={e => {this.onGoalOneChange(e.target.value)}}></textarea>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="goal-2"><strong>Goal #2</strong></label>
                                        <textarea className="form-control" id="goal-2" aria-describedby="goal-2" value={this.state.goalTwoText} onChange={e => {this.onGoalTwoChange(e.target.value)}}></textarea>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="goal-3"><strong>Goal #3</strong></label>
                                        <textarea className="form-control" id="goal-3" aria-describedby="goal-3" value={this.state.goalThreeText} onChange={e => {this.onGoalThreeChange(e.target.value)}}></textarea>
                                    </div>
                                    <Link to="/username/goals">
                                        <button type="submit" className="btn btn-primary" onClick={this.createNewGoals}>Submit</button>
                                    </Link>
                                </form>
                            </div>

                        </div>

                    </div>

                </Wrapper>

        )
    }
}

export default CreateGoals