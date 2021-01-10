import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 } from 'uuid';

const PrevGoalCard = (props) => {

    const { _userId } = useParams()
    
    return(
        
        <div className="card box-shadow my-3">

            <div className="card-body">
                <h5 className="card-title">{props.text}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {
                        [
                            ...Array(props.rating),
                        ].map(() => (   
                            <span key={v4()} className="fa fa-star text-warning"></span>   
                        ))
                    }   
                    <small className="ml-3">{props.rating}/5</small>
                </h6>
                
            </div>

            <div className="card-body border-top">
                <strong>Employee's Comments:</strong>
                <div>"{props.comments.employee.substring(0, 60)} ..."</div>
                <br/>
                <strong>Supervisor's Comments:</strong>
                <div>"{props.comments.supervisor.substring(0, 60)} ..."</div>     
            </div>
            
            <div className="card-footer bg-white border border-white">
                <Link to={`/${_userId}/goals/${props.id}`}>
                    <button type="button" className="btn btn-primary btn-sm">
                        <i className="fas fa-glasses mr-2"></i>
                        Read more
                    </button>
                </Link>
            </div>      
            
        </div>
        
    )
    
}

export default PrevGoalCard