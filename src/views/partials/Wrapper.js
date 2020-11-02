import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/partials/wrapper.css';

class Wrapper extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Wrapper