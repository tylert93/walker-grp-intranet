import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

class Tasks extends React.Component {

    render() {
        return (
            <div className="view-container">

                <Header />

                <h3 className="text-center">Tasks</h3>

                <Footer />

            </div>
        )
    }

}

export default Tasks