import React, { useState } from 'react';
import Wrapper from '../../partials/Wrapper';
import ContractRateVars from '../../tools/ContractRateVars';
import ContractRateParameters from '../../tools/ContractRateParameters';
import '../../../css/tools/ContractRateCalculator.css';
import ViewHeader from '../../misc/ViewHeader';

const ContractRateCalculator = () => {

    const [rate, setRate] = useState(20)
    const [hours, setHours] = useState(37.5) 
    const [margin, setMargin] = useState(8)
    const [pension, setPension] = useState(true) 

    const onChangeRate = (value) => {

        if(!value){
            value = '';
        }

        setRate(value);
    }

    const onChangeHours = (value) => {

        if(!value){
            value = '';
        }

        setHours(value);
    }

    const onChangeMargin = (value) => {

        if(!value){
            value = '';
        }
        
        setMargin(value);
    }

    const onChangePensionYes = () => {
        
        setPension(true);
    }

    const onChangePensionNo = () => {
        setPension(false);
    }

    return(
        
        <Wrapper>

            <ViewHeader title="Contract Rate Calculator" />

            <ContractRateVars 
                rate={rate}
                hours={hours} 
                margin={margin}
                pension={pension}
                changeRate={onChangeRate}
                changeHours={onChangeHours}  
                changeMargin={onChangeMargin}
                changePensionYes={onChangePensionYes}
                changePensionNo={onChangePensionNo}
            />

            <ContractRateParameters
                hours={hours}
                rate={rate}
                margin={margin}
                pension={pension}
                wgpFee={20}
                LEL={120}
                ST={169}
                UEL={962}
                NLW={8.72}
            />

        </Wrapper>

    )
    
}

export default ContractRateCalculator