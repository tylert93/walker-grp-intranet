import React from 'react';
import './PayrollCalculator.css';

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
        this.whatMethod() === 'Below UEL' ? this.calcAboveUELERNI() :
        this.calcAboveUELERNI())
    }

    calcAdditionalWgpIncome = () => {
        return (this.calcAvailableFee() - this.calcWGPCost())
    }
    
    render() {
        return (
            
            <div>

                <div className="row d-flex justify-content-center my-5">

                    <div className="col-12 col-lg-8">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col" className="text-center">No Pension</th>
                                    <th scope="col" className="text-center">Below UEL</th>
                                    <th scope="col" className="text-center">Above UEL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-center">
                                        <div className="py-2">
                                            Available Pay
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcNoPensionAvailablePay()).toFixed(2)}
                                        </div>
                                        
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcBelowUELAvailablePay()).toFixed(2)}
                                        </div>    
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcAboveUELAvailablePay()).toFixed(2)}
                                        </div>    
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-center">
                                        <div className="py-2">
                                            ER's NI
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcNoPensionERNI()).toFixed(2)}
                                        </div>    
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcBelowUELERNI()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcAboveUELERNI()).toFixed(2)}
                                        </div>    
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-center">
                                        <div className="py-2">
                                            ER's Pen
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                            £{(0).toFixed(2)}
                                        </div>    
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcBelowUELERPen()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcAboveUELERPen()).toFixed(2)}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-center">
                                        <div className="py-2">
                                            Check
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcNoPensionCheck()).toFixed(2)}
                                        </div>    
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcBelowUELCheck()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcAboveUELCheck()).toFixed(2)}
                                        </div>    
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-center">
                                        <div className="py-2">
                                            Split Out Holiday
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcNoPensionSplitOutHoliday()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcBelowUELSplitOutHoliday()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcAboveUELSplitOutHoliday()).toFixed(2)}
                                        </div>    
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-center">
                                        <div className="py-2">
                                            Hourly
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcNoPensionHourly()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcBelowUELHourly()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                            £{(this.calcAboveUELHourly()).toFixed(2)}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="last-row">
                                    <th scope="row" className="text-center">
                                        <div className="text-white py-2">
                                            Total Pay
                                        </div>
                                    </th>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'No Pension' ? 'highlight-total-pay' : 'text-white'}`}>
                                            £{(this.calcNoPensionTotalPay()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Below UEL' ? 'highlight-total-pay' : 'text-white'}`}>
                                            £{(this.calcBelowUELTotalPay()).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className={`rounded-pill border p-2 border-torquise ${this.whatMethod() === 'Above UEL' ? 'highlight-total-pay' : 'text-white'}`}>
                                            £{(this.calcAboveUELTotalPay()).toFixed(2)}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

                <div className="row d-flex justify-content-center my-5">

                    <div className="col-12 col-lg-8">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">WGP Fee</th>
                                    <th scope="col" className="text-center">Available Fee</th>
                                    <th scope="col" className="text-center">WGP Cost</th>
                                    <th scope="col" className="text-center">WGP Additonal Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">
                                        <div className="rounded-pill border p-2 border-torquise highlight-torquise">
                                            £{(this.props.wgpFee).toFixed(2)}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className="rounded-pill border p-2 border-torquise highlight-torquise">
                                            £{(this.calcAvailableFee()).toFixed(2)}
                                        </div>
                                        
                                    </td>
                                    <td className="text-center">
                                        <div className="rounded-pill border p-2 border-torquise highlight-torquise">
                                            £{(this.calcWGPCost()).toFixed(2)}
                                        </div>    
                                    </td>
                                    <td className="text-center">
                                        <div className="rounded-pill border p-2 border-torquise highlight-torquise">
                                            £{(this.calcAdditionalWgpIncome()).toFixed(2)}
                                        </div>    
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>
             
        )
    }
}

export default PayrollParameter