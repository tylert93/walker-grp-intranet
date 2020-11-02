import React from 'react';
import { Router} from "@reach/router";
import Home from '../views/Home';
import Tools from '../views/tools/index';
import PayrollCalculator from '../views/tools/PayrollCalculator';
import PermDeal from '../views/tools/PermDeal';
import ContractDeal from '../views/tools/ContractDeal';
import GoalIndex from '../views/goals/index';
import GoalShow from '../views/goals/show';
import GoalNew from '../views/goals/new';
import GoalEdit from '../views/goals/edit';
import Tasks from '../views/Tasks';
import Settings from '../views/Settings';

class Routes extends React.Component {
    render() {
        return(
            <Router>

                <Home path="/" />

                <Tools path="/tools" />
                <PayrollCalculator path="/tools/payroll-calculator" />
                <PermDeal path="/tools/permanent-deal" />
                <ContractDeal path="/tools/contract-deal" />

                <GoalIndex path="/username/goals" />
                <GoalNew path="/username/goals/new" username={this.props.currentUser.username}/>
                <GoalShow path="/username/goals/:_id" />
                <GoalEdit path="/username/goals/:_id/edit" />

                <Tasks path="/username/tasks" />

                <Settings path="/username/settings" />
            </Router>
        )
    }
}

export default Routes