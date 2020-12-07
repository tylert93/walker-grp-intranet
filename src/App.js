// Import React
import React, { useState } from 'react';

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

const App = () => {
   
    
    const currentUser = useState({
        username: 'tom.tyler@walkergrp.co.uk',
        name: 'Tom Tyler'
    })

    return (<Routes currentUser={currentUser}/>)
    
}

export default App