// Import React
import React from 'react';

// Import routes
import Routes from './routes/index';

//Import Auth Provider
import AuthProvider from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

// Import Frameworks and libraries
// eslint-disable-next-line
import $ from 'jquery';
import 'popper.js';
import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@fortawesome/fontawesome-free/js/all.js';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (

        <div className="body">

            <AuthProvider>
                <Routes/>
            </AuthProvider>

            <ToastContainer />

        </div>
    )
    
}

export default App