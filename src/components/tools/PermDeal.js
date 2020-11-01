import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

class PermDeal extends React.Component {
    render() {
        return (
            <div className="view-container">
                <Header />
                <iframe title="Permant Deal" src="https://docs.google.com/forms/d/e/1FAIpQLSez6pL2C0NnNjqGAYX03bsXOLcqUnpVR67onKtTsLc-EabHAw/viewform?embedded=true" width="100%" height="2370" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                <Footer />
            </div>
           
        )
    }
}

export default PermDeal