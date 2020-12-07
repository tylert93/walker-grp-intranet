import React from 'react';
import { Router} from "@reach/router";
import Home from '../components/views/Home';
import Tools from '../components/views/tools/index';
import PayrollCalculator from '../components/views/tools/PayrollCalculator';
import PermDeal from '../components/views/tools/PermDeal';
import ContractDeal from '../components/views/tools/ContractDeal';
import GoalIndex from '../components/views/goals/index';
import GoalShow from '../components/views/goals/show';
import GoalNew from '../components/views/goals/new';
import GoalEdit from '../components/views/goals/edit';
import Tasks from '../components/views/Tasks';
import Settings from '../components/views/Settings';

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