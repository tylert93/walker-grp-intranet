import React from 'react';
import './app.css';

class PayrollVars extends React.Component {

    render() {
        return (
            
            <div className="payroll-var-container">

                <div className="payroll-var">
                    <label htmlFor="hours">Hours:</label>
                    <br/>
                    <input type="number" id="hours" value={this.props.hours} onChange={e => {this.props.changeHours(e.target.value)}}></input>
                </div>

                <div className="payroll-var">
                    <label htmlFor="rate">Contract Rate:</label>
                    <br/>
                    <input type="number" id="rate" value={this.props.rate} onChange={e => {this.props.changeRate(e.target.value)}}></input>
                </div>

                <div className="payroll-var">
                    <label htmlFor="pensionButtons">Pension:</label>
                    <div id="pensionButtons">
                        <input type="radio" id="pensionYes" name="pension" onChange={e => {this.props.changePension()}} checked={this.props.pension}></input>
                        <label className="radio-btn-margin" htmlFor="pensionYes">Yes</label>
                        <input type="radio" id="pensionNo" name="pension" onChange={e => {this.props.changePension()}} checked={!(this.props.pension)}></input>
                        <label htmlFor="pensionNo">No</label>
                        <span></span>
                    </div>
                </div>

            </div>
          
        )
    }
}

export default PayrollVars