import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/walker-grp-ltd-logo-light.svg';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import AvatarContainer from '../misc/AvatarContainer';

const Header = () => {

    const { currentUserInfo, logout } = useAuth()

    const handleLogout = () => {

        try{
            logout();
        } catch(error){
            toast.error('Failed to logout', {autoClose:false, position: toast.POSITION.TOP_CENTER})
            console.log(error)
        }

    }
    
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-transparent px-5">
            
            <Link className="navbar-brand" to="/home">
                <img src={Logo} width="90" alt="Walker Group Logo"></img>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto d-flex align-items-center">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                                {currentUserInfo &&
                                <>
                                <div className="mr-2" style={{width: '40px'}}>
                                    <AvatarContainer url={currentUserInfo.avatar} />
                                </div>
                                <span>{currentUserInfo.name}</span>
                                </>}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/* <Link className="dropdown-item py-0  pl-2" to="/username/tasks">
                                <i className="fas fa-thumbtack mr-2 text-muted"></i>
                                Tasks
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item py-0  pl-2" to="/username/goals">
                                <i className="fas fa-bullseye mr-2 text-muted"></i>
                                Goals
                            </Link>
                            <div className="dropdown-divider"></div> */}
                            <Link className="dropdown-item py-0 pl-2" to="/username/account">
                                <i className="fas fa-cog mr-2 text-muted"></i>
                                Account
                            </Link>

                            
                            {currentUserInfo.admin &&
                            <>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item py-0 pl-2" to="/admin-panel">
                                <i className="fas fa-unlock-alt mr-2 text-muted"></i>
                                Admin Panel
                            </Link>
                            </>}
                            
                            <div className="dropdown-divider"></div>

                            <div onClick={handleLogout} className="dropdown-item pointer py-0 pl-2">
                                <i onClick={handleLogout} className="fas fa-sign-out-alt mr-2 text-muted"></i>
                                Logout
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/tools">Tools</Link>
                    </li>
                    
                </ul>
    
                <ul className="nav navbar-nav navbar-right">

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="#">Jobs</Link>
                    </li> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="#">Notices</Link>
                    </li> */}

                    {/* <form className="form-inline my-2 my-md-0 ml-0 ml-md-3">
                        <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                </ul>
            
            </div>
        </nav>
    )
    
    
}

export default Header