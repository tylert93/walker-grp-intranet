import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

class ContractDeal extends React.Component {
    render() {
        return (
            <div className="view-container">
                <Header />
                <iframe title="Contract Deal" src="https://docs.google.com/forms/d/e/1FAIpQLSd51KaCJ5_tf4gMp3RiATqYtvoYlYIqmaKbwoGQsnONcaCTgA/viewform?embedded=true" width="100%" height="3230" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                <Footer />
            </div>
           
        )
    }
}

export default ContractDeal