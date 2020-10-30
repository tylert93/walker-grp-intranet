import React from 'react';
import Header from '../../partials/Header';
import ToolIcon from './ToolIcon';

class Tools extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        
                        <ToolIcon iconName="far fa-handshake" colour="orange" Alt="Contract Deal" to="/tools/contract-deal" title="Contract Deal"/>

                        <ToolIcon iconName="fas fa-user-tag" colour="blue" Alt="Permanent Deal" to="/tools/permanent-deal" title="Permanent Deal" />
                        
                        <ToolIcon iconName="fas fa-calculator" colour="green" Alt="Calculator" to="/tools/payroll-calculator" title="Payroll Calculator" />

                    </div>
                </div> 
            </div>
           
        )
    }
}

export default Tools