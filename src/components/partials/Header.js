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
    
    return (<>
        {currentUserInfo &&

        <nav className="navbar navbar-expand-md navbar-light bg-transparent px-5">
            
            <Link className="navbar-brand" to="/">
                <img src={Logo} width="90" alt="Walker Group Logo"></img>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto d-flex align-items-center">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                            <div className="mr-2" style={{width: '40px'}}>
                                {currentUserInfo.avatar &&
                                <AvatarContainer url={currentUserInfo.avatar} />
                                }
                            </div>
                            <span>{currentUserInfo.name}</span>
                                
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            
                            <Link className="dropdown-item py-0  pl-2" to={`/${currentUserInfo.id}/goals`}>
                                <i className="fas fa-bullseye mr-2 text-muted"></i>
                                Goals
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item py-0 pl-2" to={`/${currentUserInfo.id}/account`}>
                                <i className="fas fa-cog mr-2 text-muted"></i>
                                Account
                            </Link>

                            {currentUserInfo.manages.length > 0 &&
                            <>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item py-0 pl-2" to="/managers-panel">
                                <i className="fas fa-id-badge mr-2 text-muted"></i>
                                Managers Panel
                            </Link>
                            </>
                            }
                            
                            {currentUserInfo.admin &&
                            <>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item py-0 pl-2" to="/admin-panel">
                                <i className="fas fa-unlock-alt mr-2 text-muted"></i>
                                Admin Panel
                            </Link>
                            </>
                            }
                            
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

                </ul>
            
            </div>
        </nav>
        }
    </>)
    
    
}

export default Header