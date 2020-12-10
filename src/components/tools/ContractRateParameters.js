import React from 'react';

const ContractRateParameters = (props) => {

    let rate = Number(props.rate)
    let hours = Number(props.hours)
    let margin = Number(props.margin)

    const calcContractRate = () => {
        return(
            rate + (rate * 0.138) + (rate/hours) + (rate * 0.05) + margin
        )
    }

    const calcAvailableFee = () => {
        return ((hours * calcContractRate()) - props.wgpFee)
    }

    const calcNoPensionERNI = () => {
        return Math.max(((hours * calcContractRate()) - props.wgpFee - props.ST) - (((hours * calcContractRate()) - props.wgpFee - props.ST) / 1.138), 0)
    }

    const calcNoPensionAvailablePay = () => {
        return ( calcAvailableFee() - calcNoPensionERNI())
    }


    const calcNoPensionSplitOutHoliday = () => {
        return ( calcNoPensionAvailablePay() - ( calcNoPensionAvailablePay() / (1 + (28/232))) )
    }

    const calcBelowUELAvailablePay = () => {
        return (    
            (calcAvailableFee() + (props.LEL * 0.03) + (props.ST * 0.138)) / 1.168 < props.ST ? 
            Math.min((calcAvailableFee() + (props.LEL * 0.03)) / 1.03, calcAvailableFee()) :
            (calcAvailableFee() + (props.LEL * 0.03) + (props.ST * 0.138)) / 1.168  
        )
    }

    const calcBelowUELSplitOutHoliday = () => {
        return ( calcBelowUELAvailablePay() - ( calcBelowUELAvailablePay() / (1 + (28/232))) )
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

    const calcAboveUELSplitOutHoliday = () => {
        return ( calcAboveUELAvailablePay() - ( calcAboveUELAvailablePay() / (1 + (28/232))) )
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

    return(<>


        <div className="row d-flex justify-content-center mt-5">

        <div className="col-10 col-sm-8 col-lg-6">

            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row" className="text-center">
                            <h5 className="py-2">
                                Contract Rate
                            </h5>
                        </th>
                        <td className="text-center">
                            <div className={`rounded-pill border p-2 border-blue highlight-blue`}>
                                <h6 className="my-2">£{(calcContractRate()).toFixed(2)}</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-center">
                            <h5 className="py-2">
                                Split Out Holiday
                            </h5>
                        </th>
                        <td className="text-center">
                            <div className={`rounded-pill border p-2 border-blue highlight-blue`}>
                                <h6 className="my-2">
                                    £{whatMethod() === 'No Pension' ? (calcNoPensionSplitOutHoliday()).toFixed(2)
                                    : whatMethod() === 'Below UEL' ? (calcBelowUELSplitOutHoliday()).toFixed(2)
                                    : whatMethod() === 'Above UEL' ? (calcAboveUELSplitOutHoliday()).toFixed(2)
                                    : 'error'}
                                </h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-center">
                            <h5 className="py-2">
                                Method
                            </h5>
                        </th>
                        <td className="text-center">
                            <div className={`rounded-pill border p-2 border-blue highlight-blue`}>
                                <h6 className="my-2">{whatMethod()}</h6>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>

        </div>
    </>)

}

export default ContractRateParameters