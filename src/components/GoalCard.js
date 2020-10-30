import React from 'react';

class GoalCard extends React.Component {
    render() {
        return(
            <div className="col-12 col-lg-6 col-xl-4 mt-5">
                <div className="card box-shadow">
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
                        </h6>
                    </div>
                    <div className="card-body border-top">
                        <strong>Employee's Comments:</strong>
                        <div>"{this.props.comments}"</div>
                        <br/>
                        <strong>Supervisor's Comments:</strong>
                        <div>"{this.props.comments}"</div>     
                    </div>      
                    
                </div>
            </div>
        )
    }
}

export default GoalCard