import React from 'react';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import {Link} from '@reach/router';
import {db} from '../../../services/firebase';
import './updateGoal.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';

class UpdateGoal extends React.Component {

    state = {
        goal: {
            text: ''
        },
        rating: 3
    }

    componentDidMount = () => {
        console.log(this.props.id);

            db.collection('goals').doc(this.props.id)
            .get()
            .then( snapshot => {
                this.setState({goal: snapshot.data()})
            })
            .catch(error => {
                console.log(error);
            })
       
    }

    changeRating = (value) => {
        this.setState({rating: value}, () => {
            console.log(this.state.rating)
        })
    }
    
    render() {
        return (
            <div className="view-container">

                <Header />

                <div className="container">
                    <h3>Review this goal</h3>
                    
                    <div className="form-container col-10 mt-5 mx-auto">
                            <h4>{this.state.goal.text}</h4>
                            <br/>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="rating"><strong>Rating</strong></label>
                                    <small className="d-block mb-2">To what degree have you achieved this goal?</small>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={this.state.rating > 4 ? solidStar : emptyStar} size='lg' className={this.state.rating > 4 ? 'gold' : ''} onClick={() => {this.changeRating(5)}}/>
                                        <FontAwesomeIcon icon={this.state.rating > 3 ? solidStar : emptyStar} size='lg' className={this.state.rating > 3 ? 'gold' : ''} onClick={() => {this.changeRating(4)}}/>
                                        <FontAwesomeIcon icon={this.state.rating > 2 ? solidStar : emptyStar} size='lg' className={this.state.rating > 2 ? 'gold' : ''} onClick={() => {this.changeRating(3)}}/>
                                        <FontAwesomeIcon icon={this.state.rating > 1 ? solidStar : emptyStar} size='lg' className={this.state.rating > 1 ? 'gold' : ''} onClick={() => {this.changeRating(2)}}/>
                                        <FontAwesomeIcon icon={this.state.rating > 0 ? solidStar : emptyStar} size='lg' className={this.state.rating > 0 ? 'gold' : ''} onClick={() => {this.changeRating(1)}}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="employee-comments"><strong>Employee's Comments</strong></label>
                                    <small className="d-block mb-2">How did you achieve it, could you have improved?</small>
                                    <textarea className="form-control" id="employee-comments" aria-describedby="employee-comments" ></textarea>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label htmlFor="supervisor-comments"><strong>Supervisor's Comments</strong></label>
                                    <small className="d-block mb-2">How do you think they performed?</small>
                                    <textarea className="form-control" id="supervisor-comments" aria-describedby="supervisor-comments" ></textarea>
                                </div>
                                <Link to="/username/goals">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </Link>
                            </form>
                        </div>

                </div>

               

                <Footer />

            </div>
        )
    }
}

export default UpdateGoal