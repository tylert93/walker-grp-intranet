import React from 'react';
import {Link} from '@reach/router';
import Logo from '../../images/walker-grp-ltd-logo-light.svg';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 px-5">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} width="125" alt="Walker Group Logo"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/tools">Tools</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Training
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Option 1</a>
                            <a className="dropdown-item" href="/">Option 2</a>
                            <a className="dropdown-item" href="/">Option 3</a>
                            </div>
                        </li>
                    </ul>
                    

        
                        <ul className="nav navbar-nav navbar-right">
                            <form className="form-inline my-2 my-lg-0 mr-4">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>
                                        <i className="fas fa-user-circle fa-2x mr-2"></i>
                                        Username
                                    </span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item py-0  pl-2" to="/username/tasks">
                                        <i className="fas fa-thumbtack mr-2 text-muted"></i>
                                        Tasks
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item py-0  pl-2" to="/username/goals">
                                        <i className="fas fa-bullseye mr-2 text-muted"></i>
                                        Goals
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item py-0 pl-2" to="/username/settings">
                                    <i className="fas fa-cog mr-2 text-muted"></i>
                                        Settings
                                    </Link>
                                </div>
                            </li>                            
                        </ul>
                
                </div>
            </nav>
        )
    }
    
}

export default Header