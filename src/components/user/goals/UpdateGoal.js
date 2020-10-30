import React from 'react';
import Header from '../../partials/Header';
import {Link} from '@reach/router';

class UpdateGoal extends React.Component {

    componentDidMount = () => {
        console.log(this.props.id);
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h3>Review Goal</h3>
                    
                    <div className="form-container col-10 mx-auto">
                            <h5></h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="goal-1"><strong>Goal #1</strong></label>
                                    <textarea className="form-control" id="goal-1" aria-describedby="goal-1" ></textarea>
                                </div>
                                <br/>

                                <Link to="/username/goals">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </Link>
                            </form>
                        </div>

                </div>
            </div>
        )
    }
}

export default UpdateGoal