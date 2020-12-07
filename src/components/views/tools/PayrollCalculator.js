import React, { useState } from 'react';
import Wrapper from '../../partials/Wrapper';
import PayrollVars from '../../tools/PayrollVars';
import PayrollParameter from '../../tools/PayrollParameter';
import '../../../css/tools/PayrollCalculator.css';

const PayrollCalculator = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let queryRate = Number(urlParams.get('rate'));
    let queryHours = Number(urlParams.get('hours'));
    let queryPension = urlParams.get('pension');

    if( Number.isNaN(queryRate) || (queryRate < 0 && queryRate > 2000)  ) {
        queryRate = 20;
    }

    if( Number.isNaN(queryHours) || (queryHours < 0 || queryHours > 2000)  ) {
        queryHours = 37.5;
    }
    
    if(queryPension === 'yes'){
        queryPension = true;
    } else if (queryPension === 'no'){
        queryPension = false;
    } else {
        queryPension = true;
    }

    const [rate, setRate] = useState(queryRate ? queryRate : 20)
    const [hours, setHours] = useState(queryHours ? queryHours : 37.5)
    const [pension, setPension] = useState(queryPension)    

    const onChangeHours = (value) => {
            setHours(value);
    }

    const onChangeRate = (value) => {
        setRate(value);
    }

    const onChangePensionYes = () => {
        setPension(true);
    }

    const onChangePensionNo = () => {
        setPension(false);
    }

    return(
        
        <Wrapper>

            <div className="container payroll-calculator-container">

                <PayrollVars 
                    hours={hours} 
                    rate={rate}
                    pension={pension}
                    changeHours={onChangeHours}  
                    changeRate={onChangeRate}
                    changePensionYes={onChangePensionYes}
                    changePensionNo={onChangePensionNo}
                />

                <PayrollParameter
                    hours={hours}
                    rate={rate}
                    pension={pension}
                    wgpFee={20}
                    LEL={120}
                    ST={169}
                    UEL={962}
                    NLW={8.72}
                />

            </div>

        </Wrapper>

    )
    
}

export default PayrollCalculator