import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/partials/wrapper.css';

const Wrapper = (props) => {
    
    return(
        <div className="wrapper">
            <Header />
                {props.children}
            <Footer />
        </div>
    )
    
}

export default Wrapper