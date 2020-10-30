import React from 'react';
import {Link} from '@reach/router';
import {db} from '../../../../services/firebase';
import Header from '../../../partials/Header';
import PrevGoalCard from './PrevGoalCard';
import CurrGoalCard from './CurrGoalCard';
import './goals.css';

class GoalIndex extends React.Component {

    state = {
        goals: null
    }

    componentDidMount() {
        db.collection('goals').where("userId", "==", 'tom.tyler@walkergrp.co.uk').orderBy("created", "desc")
        .get()
        .then( snapshot => {
            const goals = [];
            snapshot.forEach(doc => {
                const keys = doc.data();
                keys.id = doc.ref.id;
                goals.push(keys);
                this.setState({goals: goals});
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="container">

                    <div className="d-flex justify-content-between">
                        <h3>Goals</h3>
                        <Link to="/username/goals/create">
                            <button type="button" className="btn btn-success">
                                Set goals 
                                <i className="fas fa-plus ml-2"></i>
                            </button>
                        </Link>
                    </div>

                    <div className="card mt-5">
                        <div className="card-body bg-light">
                            <h5 className="m-0">Current</h5>
                        </div>
                        <div className="card-body">
                            <div className="row d-flex justify-content-start">
                                {
                                    this.state.goals &&
                                    this.state.goals.map(goal => {
                                        return(
                                            !(goal.complete) &&
                                            <div className="card-group col-12 col-lg-6 col-xl-4">
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
                        <div className="card-body bg-light">
                            <h5 className="m-0">Previous</h5>
                        </div>
                        <div className="card-body">
                            <div className="row d-flex justify-content-start">
                                {
                                    this.state.goals &&
                                    this.state.goals.map(goal => {
                                        return(
                                            goal.complete &&
                                            <div className="card-group col-12 col-lg-6 col-xl-4">
                                                <PrevGoalCard 
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
            </div>
        )
    }
    
}

export default GoalIndex