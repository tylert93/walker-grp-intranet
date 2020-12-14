import React from 'react';
import Wrapper from '../partials/Wrapper';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardGroup } from 'react-bootstrap';
import ViewHeader from '../misc/ViewHeader';
import EditPersonalModal from '../../components/account/EditPersonalModal';
import EditEmergencyModal from '../../components/account/EditEmergencyModal';

const Account = () => {

    const { currentUserInfo } = useAuth();

    return (

        <Wrapper>

            <ViewHeader title="Account" />

            <div className="row">

                <CardGroup className="col-6 p-3">

                    <Card className="box-shadow">

                        <Card.Body className="pb-0">
                            <h5 className="card-title">Role Profile</h5>
                            <div className="my-2">
                                <strong>Role: </strong>
                                {currentUserInfo.role}
                            </div>
                            <div className="my-2">
                                <strong>Manager: </strong>
                                {currentUserInfo.manager}
                            </div>
                            <div className="my-2">
                                <strong>Scope: </strong>
                            </div>
                        </Card.Body>

                        <Card.Footer className="d-flex justify-content-end bg-white border border-white">
                            
                        </Card.Footer>

                    </Card>

                </CardGroup>

                <CardGroup className="col-6 card-group p-3">

                    <Card className="card box-shadow">

                        <Card.Body className="pb-0">
                            <h5 className="card-title">Contact Details</h5>
                            <div className="my-2">
                                <strong>Direct: </strong>
                                {currentUserInfo.contactInfo.direct}
                            </div>
                            <div className="my-2">
                                <strong>Ext: </strong>
                                {currentUserInfo.contactInfo.ext}
                            </div>
                            <div className="my-2">
                                <strong>Mobile: </strong>
                                {currentUserInfo.contactInfo.mobile}
                            </div>
                            <div className="my-2">
                                <strong>Personal Email: </strong>
                                {currentUserInfo.contactInfo.personalEmail}
                            </div>
                        </Card.Body>

                        <Card.Footer className="d-flex justify-content-end bg-white border border-white">
                            <EditPersonalModal/>
                        </Card.Footer>

                    </Card>
                    
                </CardGroup>

                <CardGroup className="col-6 p-3">

                    <Card className="box-shadow">

                        <Card.Body className="pb-0">
                            <h5 className="card-title">Emergency Contact</h5>
                            <div className="my-2">
                                <strong>Name: </strong>
                                {currentUserInfo.emergencyInfo.name}
                            </div>
                            <div className="my-2">
                                <strong>Mobile </strong>
                                {currentUserInfo.emergencyInfo.mobile}
                            </div>
                            <div className="my-2">
                                <strong>Email: </strong>
                                {currentUserInfo.emergencyInfo.email}
                            </div>
                        </Card.Body>

                        <Card.Footer className="card-footer d-flex justify-content-end bg-white border border-white">
                            <EditEmergencyModal/>
                        </Card.Footer>

                    </Card>

                </CardGroup>

            </div>


        </Wrapper>

    )
      
}

export default Account