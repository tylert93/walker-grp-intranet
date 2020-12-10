import React from 'react';
import Wrapper from '../partials/Wrapper';
import collab from '../../images/collaberation2.jpg';

const Home = () => {
  
    return (

        <Wrapper>

            <div className="row d-flex flex-column-reverse flex-md-row align-items-center mt-5">

                <div className="col-11 col-md-7">
                    <img className="img-fluid w-100" src={collab} alt="collaberation" />
                </div>

                <div className="col-11 col-md-5 d-flex flex-column justify-content-center align-items-center text-center mb-5">

                    <h2>Welcome to the Walker Group Intranet</h2>

                    <div className="d-flex my-5">
                        <div className="ball bg-yellow"></div>
                        <div className="ball bg-light-blue mx-2"></div>
                        <div className="ball bg-torquise"></div>
                    </div>
                    
                    <h3>Here for the team</h3>
                </div>

            </div>

        </Wrapper>
              
    )
    
}

export default Home