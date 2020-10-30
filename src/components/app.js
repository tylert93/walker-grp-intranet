import React from 'react';
import { Router} from "@reach/router";
import Home from './Home';
import ToolsIndex from './tools/ToolsIndex/ToolsIndex';
import PayrollCalculator from './tools/PayrollCalculator/PayrollCalculator';
import PermDeal from './tools/PermDeal';
import ContractDeal from './tools/ContractDeal';
import Goals from './user/Goals/Goals';
import Tasks from './user/Tasks';
import Settings from './user/Settings';

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
                <ToolsIndex path="/tools" />
                <PayrollCalculator path="/tools/payroll-calculator" />
                <PermDeal path="/tools/permanent-deal" />
                <ContractDeal path="/tools/contract-deal" />
                <Tasks path="/username/tasks" />
                <Goals path="/username/goals" />
                <Settings path="/username/settings" />
            </Router>   
        )
        
    }
}

export default App