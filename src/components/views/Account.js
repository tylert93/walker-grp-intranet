import React, { useState } from 'react';
import Wrapper from '../partials/Wrapper';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardGroup, Button } from 'react-bootstrap';
import ViewHeader from '../misc/ViewHeader';
import EditPersonalModal from '../../components/account/EditPersonalModal';
import EditEmergencyModal from '../../components/account/EditEmergencyModal';
import UpdateAvatarModal from '../../components/account/UpdateAvatarModal';
import AvatarContainer from '../misc/AvatarContainer';

const Account = () => {

    const { currentUserInfo } = useAuth();

    return (

        <Wrapper>

            <ViewHeader title="Account" />

            <div className="row mb-3">

                <div className="col-3">

                    <AvatarContainer url={currentUserInfo.avatar} />

                    <div className="d-flex justify-content-center mt-4">
                        <UpdateAvatarModal />
                    </div>

                </div>

                <div className="col-9 pl-5">

                    <h4 className="card-title">Role Profile</h4>

                    <div className="my-2">
                        <h5>Role: </h5>
                        {currentUserInfo.roleTitle}
                    </div>
                    <div className="my-2">
                        <h5>Manager: </h5>
                        {currentUserInfo.manager}
                    </div>
                    <div className="my-2">
                        <h5>Scope: </h5>
                        {currentUserInfo.roleScope}
                    </div>

                </div>

            </div>

            <div className="row mt-4">

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
                                {currentUserInfo.emergencyContact.name}
                            </div>
                            <div className="my-2">
                                <strong>Mobile </strong>
                                {currentUserInfo.emergencyContact.mobile}
                            </div>
                            <div className="my-2">
                                <strong>Email: </strong>
                                {currentUserInfo.emergencyContact.email}
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