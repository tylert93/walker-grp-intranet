import React from 'react';

const ContractRateVars = (props) => {

    return (         

        <div className="contract-rate-vars-container mt-5">

            <div className="row d-flex justify-content-center ">

                <div className="col-9 col-sm-7 col-lg-3 mt-3">

                    <div className="form-group text-center">
                        <label>
                            <h5>Hourly Rate</h5>
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
                                aria-label="hourly rate" 
                                aria-describedby="addon-wrapping"
                                value={props.rate} 
                                onChange={e => {props.changeRate(Number(e.target.value))}}
                            />
                        </div>
                    </div>   

                </div>

                <div className="col-9 col-sm-7 col-lg-3 mt-3">

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
                                aria-label="hours per week" 
                                aria-describedby="addon-wrapping"
                                value={props.hours} 
                                onChange={e => {props.changeHours(Number(e.target.value))}}
                            />
                        </div>
                    </div>   

                </div>

                <div className="col-9 col-sm-7 col-lg-3 mt-3">

                    <div className="form-group text-center">
                        <label>
                            <h5>Margin</h5>
                        </label>
                        <div class="input-group flex-nowrap">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping">
                                    <i class="fas fa-pound-sign"></i>
                                </span>
                            </div>
                            <input
                                id="margin" 
                                type="number" 
                                class="form-control" 
                                aria-label="margin" 
                                aria-describedby="addon-wrapping"
                                value={props.margin} 
                                onChange={e => {props.changeMargin(Number(e.target.value))}}
                            />
                        </div>
                    </div>   

                </div>

                <div className="col-9 col-sm-7 col-lg-3 mt-3">

                    <div className="form-group text-center">

                        <label>
                            <h5>Pension</h5>
                        </label>

                        <div class="input-group flex-nowrap d-flex justify-content-center">

                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button 
                                    type="button" 
                                    class={`btn btn-radio ${props.pension ? 'highlight-blue' : 'highlight-white'}`} 
                                    onClick={e => {props.changePensionYes()}}>
                                        YES
                                </button>

                                <button 
                                    type="button" 
                                    class={`btn btn-radio ${props.pension ? 'highlight-white' : 'highlight-blue'}`}
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

export default ContractRateVars