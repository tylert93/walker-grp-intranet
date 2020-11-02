import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import PayrollVars from '../../components/tools/PayrollVars';
import PayrollParameter from '../../components/tools/PayrollParameter';
import '../../css/tools/PayrollCalculator.css';

class PayrollCalculator extends React.Component {

    constructor(props) {
        super(props);

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        let queryRate = Number(urlParams.get('rate'));
        let queryHours = Number(urlParams.get('hours'));
        let queryPension = urlParams.get('pension');

        if( Number.isNaN(queryRate) || (queryRate < 0 && queryRate > 2000)  ) {
            queryRate = 20;
        }
        if( Number.isNaN(queryHours) || (queryHours < 0 || queryHours > 2000)  ) {
            queryHours = 37.5;
        }
        if(queryPension === 'yes'){
            queryPension = true;
        } else if (queryPension === 'no'){
            queryPension = false;
        } else {
            queryPension = true;
        }


        this.state = {
            rate: queryRate ? queryRate : 20,
            hours: queryHours ? queryHours : 37.5,
            pension: queryPension
        }
    }

   onChangeHours = (value) => {
        this.setState({hours: value});
   }

   onChangeRate = (value) => {
        this.setState({rate: value});
    }

    onChangePensionYes = () => {
        this.setState({pension: true});
    }

    onChangePensionNo = () => {
        this.setState({pension: false});
    }

    render() {
        return(
            <div className="payroll-calculator-container view-container">

                <Header />
                
                <div className="container">

                    <PayrollVars 
                        hours={this.state.hours} 
                        rate={this.state.rate}
                        pension={this.state.pension}
                        changeHours={this.onChangeHours}  
                        changeRate={this.onChangeRate}
                        changePensionYes={this.onChangePensionYes}
                        changePensionNo={this.onChangePensionNo}
                    />

                    <PayrollParameter
                        hours={this.state.hours}
                        rate={this.state.rate}
                        pension={this.state.pension}
                        wgpFee={20}
                        LEL={120}
                        ST={169}
                        UEL={962}
                        NLW={8.72}
                    />

                </div>

                <Footer />
 
            </div>
        )
    }
}

export default PayrollCalculator