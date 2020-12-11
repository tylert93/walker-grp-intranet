import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
import Account from '../components/views/Account';
import Register from '../components/views/auth/Register';
import Reset from '../components/views/auth/Reset'
import Login from '../components/views/auth/Login';
import ContractRateCalculator from '../components/views/tools/ContractRateCalculator';
import AddressBook from '../components/views/tools/AddressBook';
import PrivateRoute from '../middleware/PrivateRoute';
import NASUWTPayScales from '../components/views/tools/NASUWTPayScales';

const Routes = () => {
    
    return(
        <Router>
            <Switch>

                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/reset-password" component={Reset} />

                <PrivateRoute exact path="/home" component={Home} />

                <PrivateRoute exact path="/tools" component={Tools} />
                <PrivateRoute exact path="/tools/payroll-calculator" component={PayrollCalculator} />
                <PrivateRoute exact path="/tools/permanent-deal" component={PermDeal} />
                <PrivateRoute exact path="/tools/contract-deal" component={ContractDeal} />
                <PrivateRoute exact path="/tools/contract-rate-calculator" component={ContractRateCalculator} />
                <PrivateRoute exact path="/tools/address-book" component={AddressBook} />
                <PrivateRoute exact path="/tools/NASUWT-pay-scales" component={NASUWTPayScales} />


                <PrivateRoute exact path="/username/account" component={Account} />
                <PrivateRoute exact path="/username/goals" component={GoalIndex} />
                <PrivateRoute exact path="/username/goals/new" component={GoalNew} />
                <PrivateRoute exact path="/username/goals/:_id" component={GoalShow} />
                <PrivateRoute exact path="/username/goals/:_id/edit" component={GoalEdit} />

                <PrivateRoute exact path="/username/tasks" component={Tasks} />

            </Switch>
        </Router>
    )
    
}

export default Routes