import React from 'react';
import {Link} from '@reach/router';

class CurrGoalCard extends React.Component {
    render() {
        return(
            
                <div className="card box-shadow my-3">
                    <div className="card-body pb-0">
                        <h5 className="card-title">{this.props.text}</h5>
                    </div>
                    <div className="card-footer bg-white border border-white">
                        <Link to={`/username/goals/${this.props.id}/edit`}>
                            <button type="button" class="btn btn-primary btn-sm">
                                <i class="fas fa-graduation-cap mr-2"></i>
                                Assess
                            </button>
                        </Link>
                    </div>
                    
                </div>
            
        )
    }
}

export default CurrGoalCard