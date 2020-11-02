import React from 'react';
import Wrapper from '../partials/Wrapper';
import ToolIcon from '../../components/tools/ToolIcon';
import '../../css/tools/index.css';

class Tools extends React.Component {
    render() {
        return (

            <Wrapper>

                <div className="container mt-5">
                    <div className="row">
                                    
                        <ToolIcon iconName="far fa-handshake" colour="juicy-orange" Alt="Contract Deal" to="/tools/contract-deal" title="Contract Deal"/>

                        <ToolIcon iconName="fas fa-user-tag" colour="cool-blues" Alt="Permanent Deal" to="/tools/permanent-deal" title="Permanent Deal" />
                        
                        <ToolIcon iconName="fas fa-calculator" colour="lush" Alt="Calculator" to="/tools/payroll-calculator" title="Payroll Calculator" />

                    </div>
                </div>
           
            </Wrapper>
            
        )
    }
}

export default Tools