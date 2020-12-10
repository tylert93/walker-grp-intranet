import React from 'react';

const ViewHeader = (props) => {

    return(

        <div className="view-heading">

            <h3 className="ml-3">{props.title}</h3>

            <div className="row">
                <div className="col-4">
                    <div className="pipe bg-yellow mx-0"></div>
                </div>
                <div className="col-4">
                    <div className="pipe bg-light-blue mx-0"></div>
                </div>
                <div className="col-4">
                    <div className="pipe bg-torquise mx-0"></div>
                </div>    
            </div>
            
        </div>

    )

}

export default ViewHeader