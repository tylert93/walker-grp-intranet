import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import ToolIcon from '../../components/tools/ToolIcon';
import '../../css/tools/index.css';

class Tools extends React.Component {
    render() {
        return (
            <div className="view-container">

                <Header />

                <div className="container mt-5">
                    <div className="row">
                        
                        <ToolIcon iconName="far fa-handshake" colour="juicy-orange" Alt="Contract Deal" to="/tools/contract-deal" title="Contract Deal"/>

                        <ToolIcon iconName="fas fa-user-tag" colour="cool-blues" Alt="Permanent Deal" to="/tools/permanent-deal" title="Permanent Deal" />
                        
                        <ToolIcon iconName="fas fa-calculator" colour="lush" Alt="Calculator" to="/tools/payroll-calculator" title="Payroll Calculator" />

                    </div>
                </div>

                <Footer />

            </div>
           
        )
    }
}

export default Tools