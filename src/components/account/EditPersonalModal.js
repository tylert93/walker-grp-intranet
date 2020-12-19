import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../services/firebase';
import { toast } from 'react-toastify'; 

const EditPersonalModal = () => {

    const { currentUser, currentUserInfo, updateCurrentUserInfo } = useAuth()
    const [show, setShow] = useState(false);

    const [direct, setDirect] = useState(currentUserInfo.contactInfo.direct)
    const [ext, setExt] = useState(currentUserInfo.contactInfo.ext)
    const [mobile, setMobile] = useState(currentUserInfo.contactInfo.mobile)
    const [personalEmail, setPersonalEmail] = useState(currentUserInfo.contactInfo.personalEmail)

    const changeDirect = (value) => {
        setDirect(value)
    }

    const changeExt = (value) => {
        setExt(value)
    }

    const changeMobile = (value) => {
        setMobile(value)
    }

    const changePersonalEmail = (value) => {
        setPersonalEmail(value)
    }
  
    const handleClose = () => {

        setShow(false)

        setDirect(currentUserInfo.contactInfo.direct)
        setExt(currentUserInfo.contactInfo.ext)
        setMobile(currentUserInfo.contactInfo.mobile)
        setPersonalEmail(currentUserInfo.contactInfo.personalEmail)
    };

    const handleShow = () => {
        setDirect(currentUserInfo.contactInfo.direct)
        setExt(currentUserInfo.contactInfo.ext)
        setMobile(currentUserInfo.contactInfo.mobile)
        setPersonalEmail(currentUserInfo.contactInfo.personalEmail)
        setShow(true)
    }

    const updatePersonal = () => {

        db.collection('users').doc(currentUser.email)
        .update({
            "contactInfo.direct":direct,
            "contactInfo.ext":ext,
            "contactInfo.mobile":mobile,
            "contactInfo.personalEmail":personalEmail,
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
                <Modal.Title>Contact Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>

                    <Form.Group id="direct">
                        <Form.Label>Direct</Form.Label>
                        <Form.Control onChange={e => {changeDirect(e.target.value)}} type="text" value={direct} required />
                    </Form.Group>

                    <Form.Group id="ext">
                        <Form.Label>Ext</Form.Label>
                        <Form.Control onChange={e => {changeExt(e.target.value)}} type="text" value={ext} required />
                    </Form.Group>

                    <Form.Group id="mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control onChange={e => {changeMobile(e.target.value)}} type="text" value={mobile} required />
                    </Form.Group>

                    <Form.Group id="personal-email">
                        <Form.Label>Personal Email</Form.Label>
                        <Form.Control onChange={e => {changePersonalEmail(e.target.value)}} type="text" value={personalEmail} required />
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
  
  export default EditPersonalModal 