import React from 'react';
import Header from './header';
import PayrollVars from './PayrollVars';
import PayrollParameter from './PayrollParameter';

class PayrollCalculator extends React.Component {

    constructor(props) {
        super(props);

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        let queryRate = Number(urlParams.get('rate'));
        let queryHours = Number(urlParams.get('hours'));
        let queryPension = urlParams.get('pension');

        if( Number.isNaN(queryRate) || (queryRate < 0 && queryRate > 2000)  ) {
            queryRate = 50;
        }
        if( Number.isNaN(queryHours) || (queryHours < 0 || queryHours > 2000)  ) {
            queryHours = 28;
        }
        if(queryPension === 'yes'){
            queryPension = true;
        } else if (queryPension === 'no'){
            queryPension = false;
        } else {
            queryPension = true;
        }


        this.state = {
            rate: queryRate ? queryRate : 50,
            hours: queryHours ? queryHours : 28,
            pension: queryPension
        }
    }

   onChangeHours = (value) => {
        this.setState({hours: value});
   }

   onChangeRate = (value) => {
        this.setState({rate: value});
    }

    onChangePension = () => {
        this.setState({pension: !(this.state.pension)});
    }

    render() {
        return(
            <div>
                <Header />
                
                <PayrollVars 
                    hours={this.state.hours} 
                    rate={this.state.rate}
                    pension={this.state.pension}
                    changeHours={this.onChangeHours}  
                    changeRate={this.onChangeRate}
                    changePension={this.onChangePension}
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
        )
    }
}

export default PayrollCalculator