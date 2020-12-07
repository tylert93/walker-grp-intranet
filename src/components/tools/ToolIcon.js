import React from 'react';
import {Link} from '@reach/router';

const ToolIcon = (props) => {

    return (
        <Link className={`link col-2 m-3 p-0`} to={props.to}>
        <div className={`tool-card hvr-shadow hvr-float ${props.colour}`}>
            

                <div className={`d-flex justify-content-center`}>
                    
                    <div className={`p-3`}> 
                        <img src={props.svg} width="120" alt="Walker Group Logo"></img>
                    </div>
                    
                </div>

                <h5 className="text-center mt-0 mb-4">{props.title}</h5> 

            
        </div>
        </Link>
    )

}

export default ToolIcon