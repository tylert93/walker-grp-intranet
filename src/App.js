// Import React
import React from 'react';

// Import routes
import Routes from './routes/index';

import './css/app.css';

// Import Frameworks and libraries
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

        return (<Routes currentUser={this.state.currentUser}/>)
        
    }
}

export default App