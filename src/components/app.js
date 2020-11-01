// Import React
import React from 'react';

// Import components
import { Router} from "@reach/router";
import Home from './Home';
import ToolsIndex from './tools/ToolsIndex/ToolsIndex';
import PayrollCalculator from './tools/PayrollCalculator/PayrollCalculator';
import PermDeal from './tools/PermDeal';
import ContractDeal from './tools/ContractDeal';
import GoalIndex from './user/goals/goalIndex/GoalIndexs';
import CreateGoals from './user/goals/CreateGoals';
import UpdateGoal from './user/goals/UpdateGoal';
import Tasks from './user/Tasks';
import Settings from './user/Settings';

import './app.css';

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
                <ToolsIndex path="/tools" />
                <PayrollCalculator path="/tools/payroll-calculator" />
                <PermDeal path="/tools/permanent-deal" />
                <ContractDeal path="/tools/contract-deal" />
                <Tasks path="/username/tasks" />
                <GoalIndex path="/username/goals" />
                <CreateGoals path="/username/goals/create" username={this.state.currentUser.username}/>
                <UpdateGoal path="/username/goals/:id/update" />
                <Settings path="/username/settings" />
            </Router>   
        )
        
    }
}

export default App