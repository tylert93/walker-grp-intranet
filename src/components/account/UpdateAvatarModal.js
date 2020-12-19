import React, { useState } from 'react';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { db, storage } from '../../services/firebase';
import { toast } from 'react-toastify'; 

const EditPersonalModal = () => {

    const { currentUser, currentUserInfo, updateCurrentUserInfo } = useAuth()
    const [ loading, setLoading ] = useState(false)
    const [show, setShow] = useState(false);
  
    const handleClose = () => {

        setLoading(false)
        setShow(false)

    };

    const handleShow = () => setShow(true);

    const updateAvatar = async(e) => {

        if(e.target.files[0]){

            setLoading(true)

            let storageRef = storage.ref()
            let file = e.target.files[0]
            
            let fileRef = storageRef.child(`avatars/${currentUserInfo.email}`)
            await fileRef.put(file)
            let imgUrl = await fileRef.getDownloadURL()

            await db.collection('users').doc(currentUser.email)
            .update({
                avatar: imgUrl
            })
            .then(
                updateCurrentUserInfo()
            )
            .catch(error => {
                toast.error("Failed to update info", {autoClose:false, position: toast.POSITION.TOP_CENTER})
                console.log(error)
            })
        }

        handleClose()

    }

    const renderContent = () => {

        if(loading){
            return(
                <div className="d-flex flex-column align-items-center">
                    <h5>uploading...</h5>
                    <div className="d-flex justify-content-center my-3">
                            <Spinner className="bg-yellow" animation="grow" style={{backgroundColor: '#ffcb00'}} />
                            <Spinner className="bg-light-blue mx-3" animation="grow" style={{backgroundColor: '#83ceea'}} />
                            <Spinner className="bg-torquise" animation="grow" style={{backgroundColor: '#6ebfa2'}} />
                    </div>
                </div>
            )
        }

        if(!loading){
            return(
                <Form>
                    <Form.File 
                        id="custom-file"
                        label="Choose file..."
                        custom
                        onChange={updateAvatar}
                        multiple="false"
                        accept="image/*"
                    />
                </Form>
            )
        }

    }
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
            <i class="fas fa-camera mr-2"></i>
            Update Avatar
        </Button>
  
        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Avatar</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {renderContent()}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditPersonalModal 