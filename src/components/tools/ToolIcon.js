import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ToolIcon = (props) => {

    return (

        <CardGroup className="col-6 col-sm-6 col-md-4 col-lg-3 m-0 p-3">
            
                <Card className={`d-flex tool-card hvr-shadow hvr-float ${props.colour}`}>  
                    <Link className={`link w-100 h-100 p-3`} to={props.to}>
                        <div className={`d-flex justify-content-center`}>
                            
                            <div className={`p-3`}> 
                                <img src={props.svg} width="100" alt="Walker Group Logo"></img>
                            </div>
                            
                        </div>

                        <h5 className="text-center mt-0 mb-4">{props.title}</h5> 
                    </Link>
                </Card>
            
        </CardGroup>
        
    )

}

export default ToolIcon