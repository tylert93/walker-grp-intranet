import React from 'react';
import {db} from '../services/firebase';
import Header from './header';
import GoalCard from './GoalCard';
import './goals.css';

class Goals extends React.Component {

    state = {
        goals: null
    }

    componentDidMount() {
        db.collection('goals').where("userId", "==", 'tom.tyler@walkergrp.co.uk')
        .get()
        .then( snapshot => {
            const goals = [];
            snapshot.forEach(doc => {
                goals.push(doc.data());
                this.setState({goals: goals});
            })
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="card-deck row d-flex justify-content-start">
                        {
                            this.state.goals &&
                            this.state.goals.map(goal => {
                                return(
                                    
                                        <GoalCard 
                                            text={goal.text}
                                            rating={goal.rating}
                                            comments={goal.comments} 
                                        />
                                
                                )
                            })
                            
                        }
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Goals