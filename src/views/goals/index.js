import React from 'react';
import {Link} from '@reach/router';
import {db} from '../../services/firebase';
import Wrapper from '../partials/Wrapper';
import PrevGoalCard from '../../components/goals/PrevGoalCard';
import CurrGoalCard from '../../components/goals/CurrGoalCard';
import '../../css/goals/index.css';

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
                        <div className="card-body bg-purple text-white">
                            <h5 className="text-shadow m-0">Previous</h5>
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
    
}

export default GoalIndex