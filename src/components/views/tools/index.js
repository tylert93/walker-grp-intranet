import React from 'react';
import Wrapper from '../../partials/Wrapper';
import ToolIcon from '../../tools/ToolIcon';
import '../../../css/tools/index.css';
import handshake from '../../../images/handshake2.svg';
import safe from '../../../images/safe3.svg';
import payroll from '../../../images/payroll5.svg'

const Tools = () => {

    return (

        <Wrapper>

            <div className="container mt-5">
                <div className="row">
                                
                    <ToolIcon svg={handshake} colour="juicy-orange" Alt="Contract Deal" to="/tools/contract-deal" title="Contract Deal"/>

                    <ToolIcon svg={safe}  colour="cool-blues" Alt="Permanent Deal" to="/tools/permanent-deal" title="Permanent Deal" />
                    
                    <ToolIcon svg={payroll} colour="lush" Alt="Calculator" to="/tools/payroll-calculator" title="Payroll Calculator" />

                </div>
            </div>
        
        </Wrapper>
        
    )
    
}

export default Tools