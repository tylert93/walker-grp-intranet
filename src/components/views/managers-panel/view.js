import React, { useState, useEffect } from 'react';
import { Card, CardGroup, Spinner } from 'react-bootstrap'
import ViewHeader from '../../misc/ViewHeader';
import Wrapper from '../../partials/Wrapper';
import AvatarContainer from '../../misc/AvatarContainer';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../../services/firebase';
import ToolIcon from '../../tools/ToolIcon';
import Ribbon from '../../../images/ribbon.svg';
import '../../../css/managers-panel.css';

const ManagersPanelView = () => {

    const [user, setUser] = useState('fetching')
    let { _userId } = useParams()

    const fetchUser = async() => {

        try{
            const fetchInfo = await db.collection('users').doc(_userId).get()
            setUser(fetchInfo.data())
        } catch(error){
            setUser('')
            toast.error("Could not find user information", {autoClose:false, position: toast.POSITION.TOP_CENTER})
            console.log(error)
        }
    }

    const renderContent = () => {

        if(user === 'fetching'){
            return(
                <div className="d-flex justify-content-center">
                    <Spinner className="bg-yellow" animation="grow" style={{backgroundColor: '#ffcb00'}} />
                    <Spinner className="bg-light-blue mx-3" animation="grow" style={{backgroundColor: '#83ceea'}} />
                    <Spinner className="bg-torquise" animation="grow" style={{backgroundColor: '#6ebfa2'}} />
                </div>
            )
        }

        if(!user){
            return(
                <h5>No user info found...</h5>
            )
        }

        if(user){
            return(<>

                <div className="row px-4 px-md-0 mb-3">

                    <div className="col-12  col-md-5 col-lg-4 col-xl-3 px-5 px-md-0">

                        <AvatarContainer url={user.avatar} />

                    </div>

                    <div className="col-12 col-md-7 col-lg-8 col-xl-9 pl-md-5 mt-5 mt-md-0">

                        <h4 className="card-title">{user.name}</h4>

                        <div className="my-2">
                            <h5>Role: </h5>
                            {user.roleTitle}
                        </div>
                        <div className="my-2">
                            <h5>Scope: </h5>
                            {user.roleScope}
                        </div>
                        <div className="my-2">
                            <h5>Manager: </h5>
                            {user.manager}
                        </div>
                        <div className="my-2">
                            <h5>Manages: </h5>
                            {user.manages.map(employee => {
                                return `${employee}, `
                            })}
                        </div>

                    </div>

                </div>

                <div className="row ">

                    <ToolIcon svg={Ribbon} colour="juicy-orange" Alt="Goals" to={`/${_userId}/goals`} title="Goals"/>

                </div>

                <div className="row px-4 px-md-0 mt-4">

                    <CardGroup className="col-12 col-md-6 card-group p-3">

                        <Card className="card box-shadow">

                            <Card.Body>
                                <h5 className="card-title">Contact Details</h5>
                                <div className="my-2">
                                    <strong>Direct: </strong>
                                    {user.contactInfo.direct}
                                </div>
                                <div className="my-2">
                                    <strong>Ext: </strong>
                                    {user.contactInfo.ext}
                                </div>
                                <div className="my-2">
                                    <strong>Mobile: </strong>
                                    {user.contactInfo.mobile}
                                </div>
                                <div className="my-2">
                                    <strong>Personal Email: </strong>
                                    {user.contactInfo.personalEmail}
                                </div>
                            </Card.Body>

                        </Card>
                        
                    </CardGroup>

                    <CardGroup className="col-12 col-md-6 card-group p-3">

                        <Card className="box-shadow">

                            <Card.Body >
                                <h5 className="card-title">Emergency Contact</h5>
                                <div className="my-2">
                                    <strong>Name: </strong>
                                    {user.emergencyContact.name}
                                </div>
                                <div className="my-2">
                                    <strong>Mobile </strong>
                                    {user.emergencyContact.mobile}
                                </div>
                                <div className="my-2">
                                    <strong>Email: </strong>
                                    {user.emergencyContact.email}
                                </div>
                            </Card.Body>

                        </Card>

                    </CardGroup>

                </div>
            </>)
        }

    }

    useEffect(() => {

        fetchUser()

    }, [])

    return(
        <Wrapper>

            <ViewHeader title={"Manager's Panel"} />

            {renderContent()}

        </Wrapper>
    )

}

export default ManagersPanelView 