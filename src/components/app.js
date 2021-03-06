import React from 'react';
import { Router} from "@reach/router";
import Home from './home';
import Tools from './Tools';
import PayrollCalculator from './PayrollCalculator';
import PermDeal from './PermDeal';
import ContractDeal from './ContractDeal';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: 3
        }
    }

    render() {

        return (
            <Router>
                <Home path="/" />
                <Tools path="/tools" />
                <PayrollCalculator path="/tools/payroll-calculator" />
                <PermDeal path="/tools/permanent-deal" />
                <ContractDeal path="/tools/contract-deal" />
            </Router>   
        )
        
    }
}

export default App