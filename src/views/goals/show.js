import React from 'react';
import Wrapper from '../partials/Wrapper';
import {db} from '../../services/firebase';

class GoalShow extends React.Component{

    state = {
        goal: {
            text: '',
            rating: null,
            comments: {
                employee: '',
                supervisor: ''
            }
        }
    }

    componentDidMount() {
        db.collection('goals').doc(this.props._id)
        .get()
        .then( snapshot => {
            this.setState({goal: snapshot.data()})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(

            <Wrapper>

                <div className="container">

                    <div className="row">

                        <div className="col-10 mx-auto">

                            <h3>{this.state.goal.text}</h3>

                            <br/>

                            <h5>Rating</h5>

                            <h6 className="card-subtitle mb-2 text-muted">
                                {
                                    [
                                        ...Array(this.state.goal.rating),
                                    ].map(() => (   
                                        <span className="fa fa-star text-warning"></span>   
                                    ))
                                }   
                                <small className="ml-3">{this.state.goal.rating}/5</small>
                            </h6>

                            <br/>

                            <h5>Employee's Comments</h5>

                            <div>{this.state.goal.comments.employee}</div>

                            <br/>

                            <h5>Supervisor's Comments</h5>

                            <div>{this.state.goal.comments.supervisor}</div>
                            
                        </div>

                    </div>

                </div>

            </Wrapper>

        )
    }
}

export default GoalShow