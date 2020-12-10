import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import '../../css/partials/wrapper.css';

const Wrapper = (props) => {
    
    return(
        <div className="wrapper">
            <Header />
                <Container>
                    {props.children}
                </Container>
            <Footer />
        </div>
    )
    
}

export default Wrapper