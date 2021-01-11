import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../services/firebase';
import { toast } from 'react-toastify'; 

const EditEmergencyModal = () => {

    const { currentUser, currentUserInfo, updateCurrentUserInfo } = useAuth()
    const [show, setShow] = useState(false);

    const [name, setName] = useState(currentUserInfo.emergencyContact.name)
    const [mobile, setMobile] = useState(currentUserInfo.emergencyContact.mobile)
    const [email, setEmail] = useState(currentUserInfo.emergencyContact.email)

    const changeName = (value) => {
        setName(value)
    }

    const changeMobile = (value) => {
        setMobile(value)
    }

    const changeEmail = (value) => {
        setEmail(value)
    }
  
    const handleClose = () => {

        setShow(false)
        setName(currentUserInfo.emergencyContact.name)
        setMobile(currentUserInfo.emergencyContact.mobile)
        setEmail(currentUserInfo.emergencyContact.personalEmail)
    };

    const handleShow = () => {
        setName(currentUserInfo.emergencyContact.name)
        setMobile(currentUserInfo.emergencyContact.mobile)
        setEmail(currentUserInfo.emergencyContact.personalEmail)
        setShow(true)
    }

    const updatePersonal = () => {

        db.collection('users').doc(currentUserInfo.id)
        .update({
            "emergencyContact.name":name,
            "emergencyContact.mobile":mobile,
            "emergencyContact.email":email,
        })
        .then(
            updateCurrentUserInfo()
        )
        .catch(error => {
            toast.error("Failed to update info", {autoClose:false, position: toast.POSITION.TOP_CENTER})
            console.log(error)
        })

        handleClose()

    }
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
            <i class="fas fa-pencil-alt mr-2"></i>
            Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Emergency Contact</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>

                    <Form.Group id="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={e => {changeName(e.target.value)}} type="text" value={name} required />
                    </Form.Group>

                    <Form.Group id="mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control onChange={e => {changeMobile(e.target.value)}} type="text" value={mobile} required />
                    </Form.Group>

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => {changeEmail(e.target.value)}} type="text" value={email} required />
                    </Form.Group>

                </Form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={updatePersonal}>
                Update
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditEmergencyModal 