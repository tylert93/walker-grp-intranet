import React, { useState, useEffect } from 'react';
import Wrapper from '../../partials/Wrapper';
import ViewHeader from '../../misc/ViewHeader';
import { Spinner, CardGroup, Card, Button } from 'react-bootstrap';
import { db } from '../../../services/firebase';
import AvatarContainer from '../../misc/AvatarContainer';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { useAuth } from '../../../contexts/AuthContext';

const ManagersPanelIndex = () => {

    const [users, setUsers] = useState('fetching')
    const { currentUserInfo } = useAuth()

    const fetchUsers = async () => {

        try{
            let querySnapshot = await db.collection('users').where("manager", "==", currentUserInfo.name).get()
            let usersArray =[]
            querySnapshot.forEach(doc => {
                let values = doc.data()
                values.id = doc.id
                usersArray.push(values)
            })
            setUsers(usersArray)
        }catch(error){
            console.log(error)
        }

    }

    useEffect(() => {

        fetchUsers()

    }, [])

    const renderContent = () => {

        if(users === 'fetching'){
            return(

                <div className="d-flex justify-content-center w-100">
                    <Spinner className="bg-yellow" animation="grow" style={{backgroundColor: '#ffcb00'}} />
                    <Spinner className="bg-light-blue mx-3" animation="grow" style={{backgroundColor: '#83ceea'}} />
                    <Spinner className="bg-torquise" animation="grow" style={{backgroundColor: '#6ebfa2'}} />
                </div>

            )
        }

        if(!users || users.length <= 0){
            return(
                <div>No users found</div>
            )
        }

        if(users && users.length > 0){

            return(

                users.map(user => {

                    return(

                        <CardGroup key={v4()} className="col-12 col-sm-6 col-md-4 col-lg-3 p-5 p-sm-4">

                            <Card className="box-shadow">

                                <Card.Body className="pb-0">
                                    <h5 className="card-title">{user.name}</h5>
                                    <div className="p-3">
                                        <AvatarContainer url={user.avatar} />
                                    </div>
                                </Card.Body>

                                <Card.Footer className="d-flex justify-content-end bg-white border border-white">
                                    <Link to={`/managers-panel/${user.id}`}>
                                        <Button variant="primary" size="sm">
                                            <i className="fas fa-external-link-alt mr-2"></i>
                                            View
                                        </Button>
                                    </Link>
                                </Card.Footer>

                            </Card>

                        </CardGroup>

                    )

                })

            )

        }

    }    

    return(

        <Wrapper>

            <ViewHeader title="Manager's Panel" />

            <div className="row d-flex justify-content-start">
                {renderContent()}
            </div>

        </Wrapper>

    )

}

export default ManagersPanelIndex