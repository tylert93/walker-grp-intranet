import React from 'react';

const PayrollVars = (props) => {

    return (         

        <div className="payroll-vars-container mt-5">

            <div className="row d-flex justify-content-center">

                <div className="col-4 col-md-3">

                    <div className="form-group text-center">
                        <label>
                            <h5>Contract Rate</h5>
                        </label>
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping">
                                    <i class="fas fa-pound-sign"></i>
                                </span>
                            </div>
                            <input
                                id="rate" 
                                type="number" 
                                class="form-control" 
                                aria-label="Username" 
                                aria-describedby="addon-wrapping"
                                value={props.rate} 
                                onChange={e => {props.changeRate(e.target.value)}}
                            />
                        </div>
                    </div>   

                </div>

                <div className="col-4 col-md-3">

                    <div className="form-group text-center">
                        <label>
                            <h5>Hours per week</h5>
                        </label>
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping">
                                    <i class="far fa-calendar-alt"></i>
                                </span>
                            </div>
                            <input
                                id="hours" 
                                type="number" 
                                class="form-control" 
                                aria-label="Username" 
                                aria-describedby="addon-wrapping"
                                value={props.hours} 
                                onChange={e => {props.changeHours(e.target.value)}}
                            />
                        </div>
                    </div>   

                </div>

                <div className="col-3 col-md-2">

                    <div className="form-group text-center">

                        <label>
                            <h5>Pension</h5>
                        </label>

                        <div class="input-group flex-nowrap d-flex justify-content-center">

                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button 
                                    type="button" 
                                    class={`btn btn-radio ${props.pension ? 'highlight-torquise' : 'highlight-white'}`} 
                                    onClick={e => {props.changePensionYes()}}>
                                        YES
                                </button>

                                <button 
                                    type="button" 
                                    class={`btn btn-radio highlight-white ${props.pension ? 'highlight-white' : 'highlight-torquise'}`}
                                    onClick={e => {props.changePensionNo()}}>
                                        NO
                                </button>
                            </div>

                        </div>

                    </div>    

                </div>
                
            </div>    

        </div>
        
    )
    
}

export default PayrollVars