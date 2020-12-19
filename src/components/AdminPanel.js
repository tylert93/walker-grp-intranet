import React, { useState, useEffect } from 'react';
import Wrapper from './partials/Wrapper';
import ViewHeader from '../components/misc/ViewHeader';
import { Spinner, CardGroup, Card, Button } from 'react-bootstrap';
import { db } from '../services/firebase';

const AdminPanel = () => {

    const [users, setUsers] = useState('fetching')

    useEffect(() => {

        db.collection('users').get()
        .then(querySnapshot => {
            let usersArray =[]
            querySnapshot.forEach(doc => {
                usersArray.push(doc.data())
            })
            setUsers(usersArray)
        })
        .catch(error => {
            console.log(error)
        })

    }, [])

    const renderContent = () => {

        if(users === 'fetching'){
            return(

                <div className="d-flex justify-content-center">
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

                        <CardGroup className="col-3 p-4">

                            <Card className="box-shadow">

                                <Card.Body className="pb-0">
                                    <h5 className="card-title">{user.name}</h5>
                                    <img className="img-fluid rounded-circle p-2" src={user.avatar} alt={user.name} />
                                </Card.Body>

                                <Card.Footer className="d-flex justify-content-end bg-white border border-white">
                                    <Button variant="primary" size="sm">
                                        <i class="fas fa-external-link-alt mr-2"></i>
                                        Open
                                    </Button>
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

            <ViewHeader title="Admin Panel" />

            <div className="row">
                {renderContent()}
            </div>

        </Wrapper>

    )

}

export default AdminPanel