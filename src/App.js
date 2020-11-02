// Import React
import React from 'react';

// Import components
import { Router} from "@reach/router";
import Home from './views/Home';
import Tools from './views/tools/index';
import PayrollCalculator from './views/tools/PayrollCalculator';
import PermDeal from './views/tools/PermDeal';
import ContractDeal from './views/tools/ContractDeal';
import GoalIndex from './views/goals/index';
import GoalCreate from './views/goals/create';
import GoalUpdate from './views/goals/update';
import Tasks from './views/Tasks';
import Settings from './views/Settings';

import './css/app.css';

// Import Bootstrap
// eslint-disable-next-line
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import '@fortawesome/fontawesome-free/js/all.js';

class App extends React.Component {
   
    state = {
        currentUser: {
            username:'tom.tyler@walkergrp.co.uk',
            name: 'Tom Tyler'
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
                <GoalIndex path="/username/goals" />
                <GoalCreate path="/username/goals/create" username={this.state.currentUser.username}/>
                <GoalUpdate path="/username/goals/:id/update" />
                <Tasks path="/username/tasks" />
                <Settings path="/username/settings" />
            </Router>   
        )
        
    }
}

export default App