import React, { useState, useEffect } from 'react';
import { Spinner, Card, Accordion, Button } from 'react-bootstrap'
import Wrapper from '../../partials/Wrapper';
import ViewHeader from '../../misc/ViewHeader';
import { db } from '../../../services/firebase';
import '../../../css/tools/addressBook.css';

const AddressBook = () => {

    const [users, setUsers] = useState('fetching')
    const [input, setInput] = useState('');
    const [filteredList, setFilteredList] = useState([])

    const changeInput = (value) => {
        setInput(value)
    }

    const handleSearch = (e) => {
        e.preventDefault()

        const filtered = users.filter(contact => {
            return contact.name.toLowerCase().includes(input.toLowerCase())
           })

        setFilteredList(filtered);



    }

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

                <div className="row" >

                    <div className="col-6">

                        <Accordion className="address-book-accordion" defaultActiveKey="0">

                            {users.map((user, index) => {
                                return(
                                <Card>

                                    <Card.Header>
                                        <Accordion.Toggle className="text-dark" as={Button} variant="link" eventKey={index + 1} >
                                            {user.name}
                                        </Accordion.Toggle>
                                    </Card.Header>

                                    <Accordion.Collapse eventKey={index + 1}>

                                        <Card.Body>
                                            <div className="my-2">
                                                <strong>Direct: </strong> 
                                                {user.contactInfo.direct}
                                            </div>
                                            <div className="my-2">
                                                <strong>Extension: </strong> 
                                                {user.contactInfo.ext}
                                            </div>
                                            <div className="my-2">
                                                <strong>Mobile: </strong>
                                                {user.contactInfo.mobile}
                                            </div>
                                            <div className="my-2">
                                                <strong>Email: </strong> 
                                                {user.email}
                                            </div>
                                        </Card.Body>

                                    </Accordion.Collapse>

                                </Card>
                                )

                            })
                            }

                        </Accordion>

                    </div>

                    <div className="col-6">

                        <form onSubmit={e => {handleSearch(e)}} className="d-flex mb-3">
                                <input className="form-control mr-sm-2" type="search" value={input} onChange={e => {changeInput(e.target.value)}} placeholder="Search contacts ..." aria-label="Search"></input>
                                <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                        {filteredList.map((contact, index) => {
                                return(
                            
                                    <Card.Body className="my-0" key={index}>

                                        <h5 className="mb-3">{contact.name}</h5>

                                        <div className="my-2">
                                            <strong>Direct: </strong> 
                                            {contact.contactInfo.direct}
                                        </div>
                                        <div className="my-2">
                                            <strong>Extension: </strong> 
                                            {contact.contactInfo.ext}
                                        </div>
                                        <div className="my-2">
                                            <strong>Mobile: </strong>
                                            {contact.contactInfo.mobile}
                                        </div>
                                        <div className="my-2">
                                            <strong>Email: </strong> 
                                            {contact.email}
                                        </div>
                                    </Card.Body>

                                )

                            })
                            }


                    </div>

                </div>
                
            )
        }

    }

    return(
        
        <Wrapper>

            <ViewHeader title="Address Book" />

            {renderContent()}

        </Wrapper>

    )
    
}

export default AddressBook