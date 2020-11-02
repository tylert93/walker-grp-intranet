import React from 'react';
import Wrapper from '../partials/Wrapper';
import {Link} from '@reach/router';
import {db} from '../../services/firebase';
import '../../css/goals/update.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';

class UpdateGoal extends React.Component {

    state = {
        text: '',
        rating: 1,
        employeeComments: '',
        supervisorComments: ''
    }

    componentDidMount = () => {

        db.collection('goals').doc(this.props._id)
        .get()
        .then( snapshot => {
            this.setState({text: snapshot.data().text})
        })
        .catch(error => {
            console.log(error);
        })
       
    }

    changeRating = (value) => {
        this.setState({rating: value});
    }

    changeEmployeeComments = (value) => {
        this.setState({employeeComments: value});
    }

    changeSupervisorComments = (value) => {
        this.setState({supervisorComments: value});
    }

    updateGoal = () => {
        db.collection('goals').doc(this.props.id).update({
            rating: this.state.rating,
            "comments.employee": this.state.employeeComments,
            "comments.supervisor": this.state.supervisorComments,
            complete: true 
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (

            <Wrapper>

                <div className="container">

                    <h3>Review this goal</h3>
                    
                    <div className="form-container col-10 mt-5 mx-auto">
                        <h4>{this.state.text}</h4>
                        <br/>
                        <form>
                            <div className="form-group">
                                <label htmlFor="rating"><strong>Rating</strong></label>
                                <small className="d-block mb-2">To what degree have you achieved this goal?</small>
                                <div className="rating">
                                    <FontAwesomeIcon icon={this.state.rating > 4 ? solidStar : emptyStar} size='lg' className={`mx-1 ${this.state.rating > 4 ? 'gold' : 'grey'}`} onClick={() => {this.changeRating(5)}}/>
                                    <FontAwesomeIcon icon={this.state.rating > 3 ? solidStar : emptyStar} size='lg' className={`mx-1 ${this.state.rating > 3 ? 'gold' : 'grey'}`} onClick={() => {this.changeRating(4)}}/>
                                    <FontAwesomeIcon icon={this.state.rating > 2 ? solidStar : emptyStar} size='lg' className={`mx-1 ${this.state.rating > 2 ? 'gold' : 'grey'}`} onClick={() => {this.changeRating(3)}}/>
                                    <FontAwesomeIcon icon={this.state.rating > 1 ? solidStar : emptyStar} size='lg' className={`mx-1 ${this.state.rating > 1 ? 'gold' : 'grey'}`} onClick={() => {this.changeRating(2)}}/>
                                    <FontAwesomeIcon icon={this.state.rating > 0 ? solidStar : emptyStar} size='lg' className={`mx-1 ${this.state.rating > 0 ? 'gold' : 'grey'}`} onClick={() => {this.changeRating(1)}}/>
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="employee-comments"><strong>Employee's Comments</strong></label>
                                <small className="d-block mb-2">How did you achieve it, could you have improved?</small>
                                <textarea className="form-control" id="employee-comments" aria-describedby="employee-comments" value={this.state.employeeComments} onChange={e => {this.changeEmployeeComments(e.target.value)}}></textarea>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="supervisor-comments"><strong>Supervisor's Comments</strong></label>
                                <small className="d-block mb-2">How do you think they performed?</small>
                                <textarea className="form-control" id="supervisor-comments" aria-describedby="supervisor-comments" value={this.state.supervisorComments} onChange={e => {this.changeSupervisorComments(e.target.value)}}></textarea>
                            </div>
                            <Link to="/username/goals">
                                <button type="submit" className="btn btn-primary" onClick={this.updateGoal}>Submit</button>
                            </Link>
                        </form>
                    </div>

                </div>


            </Wrapper>

        )
    }
}

export default UpdateGoal