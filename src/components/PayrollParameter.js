import React from 'react';
import './app.css'

class PayrollParameter extends React.Component {

    calcAvailableFee = () => {
        return ((this.props.hours * this.props.rate) - this.props.wgpFee)
    }

    calcNoPensionERNI = () => {
        return Math.max(((this.props.hours * this.props.rate) - this.props.wgpFee - this.props.ST) - (((this.props.hours * this.props.rate) - this.props.wgpFee - this.props.ST) / 1.138), 0)
    }

    calcNoPensionAvailablePay = () => {
        return ( this.calcAvailableFee() - this.calcNoPensionERNI())
    }

    calcNoPensionCheck = () => {
        return (this.calcNoPensionAvailablePay() + this.calcNoPensionERNI())
    }

    calcNoPensionSplitOutHoliday = () => {
        return ( this.calcNoPensionAvailablePay() - ( this.calcNoPensionAvailablePay() / (1 + (28/232))) )
    }

    calcNoPensionTotalPay = () => {
        return ( this.calcNoPensionAvailablePay() - this.calcNoPensionSplitOutHoliday() )
    }

    calcNoPensionHourly = () => {
        return ( this.calcNoPensionTotalPay() / this.props.hours )
    }

    calcBelowUELAvailablePay = () => {
        return (    
            (this.calcAvailableFee() + (this.props.LEL * 0.03) + (this.props.ST * 0.138)) / 1.168 < this.props.ST ? 
            Math.min((this.calcAvailableFee() + (this.props.LEL * 0.03)) / 1.03, this.calcAvailableFee()) :
            (this.calcAvailableFee() + (this.props.LEL * 0.03) + (this.props.ST * 0.138)) / 1.168  
        )
    }

    calcBelowUELERNI = () => {
        return Math.max((this.calcBelowUELAvailablePay() - this.props.ST) * 0.138, 0)
    }

    calcBelowUELERPen = () => {
        return Math.max((this.calcBelowUELAvailablePay() - this.props.LEL) * 0.03, 0)
    }

    calcBelowUELCheck = () => {
        return (this.calcBelowUELAvailablePay() + this.calcBelowUELERNI() + this.calcBelowUELERPen())
    }

    calcBelowUELSplitOutHoliday = () => {
        return ( this.calcBelowUELAvailablePay() - ( this.calcBelowUELAvailablePay() / (1 + (28/232))) )
    }

    calcBelowUELTotalPay = () => {
        return ( this.calcBelowUELAvailablePay() - this.calcBelowUELSplitOutHoliday() )
    }

    calcBelowUELHourly = () => {
        return ( this.calcBelowUELTotalPay() / this.props.hours )
    }

    calcAboveUELERPen = () => {
        return ((this.props.UEL - this.props.LEL) * 0.03)
    }

    calcAboveUELERNI = () => {
        return Math.max((this.calcAvailableFee() - this.calcAboveUELERPen() - this.props.ST) - ((this.calcAvailableFee() - this.calcAboveUELERPen() - this.props.ST) / 1.138), 0)
    }

    calcAboveUELAvailablePay = () => {
        return (this.calcAvailableFee() - this.calcAboveUELERNI() - this.calcAboveUELERPen())
    }

    calcAboveUELCheck = () => {
        return (this.calcAboveUELAvailablePay() + this.calcAboveUELERNI() + this.calcAboveUELERPen())
    }

    calcAboveUELSplitOutHoliday = () => {
        return ( this.calcAboveUELAvailablePay() - ( this.calcAboveUELAvailablePay() / (1 + (28/232))) )
    }

    calcAboveUELTotalPay = () => {
        return ( this.calcAboveUELAvailablePay() - this.calcAboveUELSplitOutHoliday() )
    }

    calcAboveUELHourly = () => {
        return ( this.calcAboveUELTotalPay() / this.props.hours )
    }

    isBelowUEL = () => {
        return(this.calcBelowUELAvailablePay() < this.props.UEL ? true : false)
    }

    whatMethod = () => {
        return (
            !(this.props.pension) ? 'No Pension' : 
            this.isBelowUEL() ? 'Below UEL' :
            'Above UEL'
        )
    }

    calcWGPCost = () => {
       return (this.calcBelowUELHourly() * this.props.hours * (1 + (28/232))) +
        (this.props.pension === true ? Math.min(this.calcBelowUELERPen(), this.calcAboveUELERPen()) : 0) +
        (this.whatMethod() === 'No Pension' ? this.calcNoPensionERNI() :
        this.whatMethod() === 'Below UEL' ? this/this.calcAboveUELERNI() :
        this.calcAboveUELERNI())
    }

    calcAdditionalWgpIncome = () => {
        return (this.calcAvailableFee() - this.calcWGPCost())
    }
    
    render() {
        return (
            
            <div>
            
            <div className="parameter-grid">

                <div className="grid-row">
                    <div className="grid-box"></div>
                    <div className="grid-box">No Pension</div>
                    <div className="grid-box">Below UEL</div>
                    <div className="grid-box">Above UEL</div>
                </div>
                <div className="grid-row">
                    <div className="grid-box">
                        Available Pay
                    </div>
                    <div className="grid-box">
                        £{(this.calcNoPensionAvailablePay()).toFixed(2)}
                    </div>    
                    <div className="grid-box">
                        £{(this.calcBelowUELAvailablePay()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAboveUELAvailablePay()).toFixed(2)}
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-box">ER's NI</div>
                    <div className="grid-box">
                        £{(this.calcNoPensionERNI()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcBelowUELERNI()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAboveUELERNI()).toFixed(2)}
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-box">ER's Pen</div>
                    <div className="grid-box">
                        £{(0).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcBelowUELERPen()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAboveUELERPen()).toFixed(2)}
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-box">Check</div>
                    <div className="grid-box">
                        £{(this.calcNoPensionCheck()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcBelowUELCheck()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAboveUELCheck()).toFixed(2)}
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-box">Split Out Holiday</div>
                    <div className="grid-box">
                        £{(this.calcNoPensionSplitOutHoliday()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcBelowUELSplitOutHoliday()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAboveUELSplitOutHoliday()).toFixed(2)}
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-box">Total Pay</div>
                    <div className="grid-box">
                        £{(this.calcNoPensionTotalPay()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcBelowUELTotalPay()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAboveUELTotalPay()).toFixed(2)}
                    </div>
                </div>
                <div className="grid-row">
                    <div className="grid-box">Hourly</div>
                    <div className="grid-box">
                        £{(this.calcNoPensionHourly()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcBelowUELHourly()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAboveUELHourly()).toFixed(2)}
                    </div>
                </div>
                
            </div>

            <div className="parameter-grid">

                <div className="grid-row">
                    <div className="grid-box">WGP Fee</div>
                    <div className="grid-box">Available Fee</div>
                    <div className="grid-box">WGP Cost</div>
                    <div className="grid-box">Add' WGP Income</div>
                    <div className="grid-box">Method</div>
                </div>

                <div className="grid-row">
                    <div className="grid-box">
                        £{(this.props.wgpFee).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAvailableFee()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcWGPCost()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        £{(this.calcAdditionalWgpIncome()).toFixed(2)}
                    </div>
                    <div className="grid-box">
                        {this.whatMethod()}
                    </div>
                </div>

            </div>

            </div>
             
        )
    }
}

export default PayrollParameter