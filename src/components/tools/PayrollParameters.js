import React from 'react';

const PayrollParameter = (props) => {

    const calcAvailableFee = () => {
        return ((props.hours * props.rate) - props.wgpFee)
    }

    const calcNoPensionERNI = () => {
        return Math.max(((props.hours * props.rate) - props.wgpFee - props.ST) - (((props.hours * props.rate) - props.wgpFee - props.ST) / 1.138), 0)
    }

    const calcNoPensionAvailablePay = () => {
        return ( calcAvailableFee() - calcNoPensionERNI())
    }

    const calcNoPensionCheck = () => {
        return (calcNoPensionAvailablePay() + calcNoPensionERNI())
    }

    const calcNoPensionSplitOutHoliday = () => {
        return ( calcNoPensionAvailablePay() - ( calcNoPensionAvailablePay() / (1 + (28/232))) )
    }

    const calcNoPensionTotalPay = () => {
        return ( calcNoPensionAvailablePay() - calcNoPensionSplitOutHoliday() )
    }

    const calcNoPensionHourly = () => {
        return ( calcNoPensionTotalPay() / props.hours )
    }

    const calcBelowUELAvailablePay = () => {
        return (    
            (calcAvailableFee() + (props.LEL * 0.03) + (props.ST * 0.138)) / 1.168 < props.ST ? 
            Math.min((calcAvailableFee() + (props.LEL * 0.03)) / 1.03, calcAvailableFee()) :
            (calcAvailableFee() + (props.LEL * 0.03) + (props.ST * 0.138)) / 1.168  
        )
    }

    const calcBelowUELERNI = () => {
        return Math.max((calcBelowUELAvailablePay() - props.ST) * 0.138, 0)
    }

    const calcBelowUELERPen = () => {
        return Math.max((calcBelowUELAvailablePay() - props.LEL) * 0.03, 0)
    }

    const calcBelowUELCheck = () => {
        return (calcBelowUELAvailablePay() + calcBelowUELERNI() + calcBelowUELERPen())
    }

    const calcBelowUELSplitOutHoliday = () => {
        return ( calcBelowUELAvailablePay() - ( calcBelowUELAvailablePay() / (1 + (28/232))) )
    }

    const calcBelowUELTotalPay = () => {
        return ( calcBelowUELAvailablePay() - calcBelowUELSplitOutHoliday() )
    }

    const calcBelowUELHourly = () => {
        return ( calcBelowUELTotalPay() / props.hours )
    }

    const calcAboveUELERPen = () => {
        return ((props.UEL - props.LEL) * 0.03)
    }

    const calcAboveUELERNI = () => {
        return Math.max((calcAvailableFee() - calcAboveUELERPen() - props.ST) - ((calcAvailableFee() - calcAboveUELERPen() - props.ST) / 1.138), 0)
    }

    const calcAboveUELAvailablePay = () => {
        return (calcAvailableFee() - calcAboveUELERNI() - calcAboveUELERPen())
    }

    const calcAboveUELCheck = () => {
        return (calcAboveUELAvailablePay() + calcAboveUELERNI() + calcAboveUELERPen())
    }

    const calcAboveUELSplitOutHoliday = () => {
        return ( calcAboveUELAvailablePay() - ( calcAboveUELAvailablePay() / (1 + (28/232))) )
    }

    const calcAboveUELTotalPay = () => {
        return ( calcAboveUELAvailablePay() - calcAboveUELSplitOutHoliday() )
    }

    const calcAboveUELHourly = () => {
        return ( calcAboveUELTotalPay() / props.hours )
    }

    const isBelowUEL = () => {
        return(calcBelowUELAvailablePay() < props.UEL ? true : false)
    }

    const whatMethod = () => {
        return (
            !(props.pension) ? 'No Pension' : 
            isBelowUEL() ? 'Below UEL' :
            'Above UEL'
        )
    }

    const calcWGPCost = () => {
       return (calcBelowUELHourly() * props.hours * (1 + (28/232))) +
        (props.pension === true ? Math.min(calcBelowUELERPen(), calcAboveUELERPen()) : 0) +
        (whatMethod() === 'No Pension' ? calcNoPensionERNI() :
        whatMethod() === 'Below UEL' ? calcAboveUELERNI() :
        calcAboveUELERNI())
    }

    const calcAdditionalWgpIncome = () => {
        return (calcAvailableFee() - calcWGPCost())
    }
    
    return (
        
        <div className="payroll-parameters-container">

            <div className="row d-flex justify-content-center mt-5">

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
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                        £{(calcNoPensionAvailablePay()).toFixed(2)}
                                    </div>
                                    
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcBelowUELAvailablePay()).toFixed(2)}
                                    </div>    
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcAboveUELAvailablePay()).toFixed(2)}
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
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                        £{(calcNoPensionERNI()).toFixed(2)}
                                    </div>    
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcBelowUELERNI()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcAboveUELERNI()).toFixed(2)}
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
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                        £{(0).toFixed(2)}
                                    </div>    
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcBelowUELERPen()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcAboveUELERPen()).toFixed(2)}
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
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                        £{(calcNoPensionCheck()).toFixed(2)}
                                    </div>    
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcBelowUELCheck()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcAboveUELCheck()).toFixed(2)}
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
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                        £{(calcNoPensionSplitOutHoliday()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcBelowUELSplitOutHoliday()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcAboveUELSplitOutHoliday()).toFixed(2)}
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
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'No Pension' ? 'highlight-torquise' : ''}`}>
                                        £{(calcNoPensionHourly()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Below UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcBelowUELHourly()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Above UEL' ? 'highlight-torquise' : ''}`}>
                                        £{(calcAboveUELHourly()).toFixed(2)}
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
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'No Pension' ? 'highlight-total-pay' : 'text-white'}`}>
                                        £{(calcNoPensionTotalPay()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Below UEL' ? 'highlight-total-pay' : 'text-white'}`}>
                                        £{(calcBelowUELTotalPay()).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className={`rounded-pill border p-2 border-torquise ${whatMethod() === 'Above UEL' ? 'highlight-total-pay' : 'text-white'}`}>
                                        £{(calcAboveUELTotalPay()).toFixed(2)}
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
                                        £{(props.wgpFee).toFixed(2)}
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="rounded-pill border p-2 border-torquise highlight-torquise">
                                        £{(calcAvailableFee()).toFixed(2)}
                                    </div>
                                    
                                </td>
                                <td className="text-center">
                                    <div className="rounded-pill border p-2 border-torquise highlight-torquise">
                                        £{(calcWGPCost()).toFixed(2)}
                                    </div>    
                                </td>
                                <td className="text-center">
                                    <div className="rounded-pill border p-2 border-torquise highlight-torquise">
                                        £{(calcAdditionalWgpIncome()).toFixed(2)}
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

export default PayrollParameter