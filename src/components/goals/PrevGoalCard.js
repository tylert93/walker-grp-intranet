import React from 'react';

class PrevGoalCard extends React.Component {
    render() {
        return(
            
                <div className="card box-shadow my-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.text}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {
                                [
                                    ...Array(this.props.rating),
                                ].map(() => (   
                                    <span className="fa fa-star text-warning"></span>   
                                ))
                            }   
                            <small className="ml-3">{this.props.rating}/5</small>
                        </h6>
                        
                    </div>
                    <div className="card-body border-top">
                        <strong>Employee's Comments:</strong>
                        <div>"{this.props.comments.employee}"</div>
                        <br/>
                        <strong>Supervisor's Comments:</strong>
                        <div>"{this.props.comments.supervisor}"</div>     
                    </div>      
                    
                </div>
            
        )
    }
}

export default PrevGoalCard