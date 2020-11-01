import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <nav className="footer p-5 mt-5">
                <div>Copyright © 2020 Walker GRP Ltd.</div>
                <br/>
                <div>Walker GRP Ltd is a limited company registered in England and Wales 1186 4017 | Walker GRP, South Equinox, Bristol, BS32 4QL</div>
            </nav>
        )
    }
}

export default Footer