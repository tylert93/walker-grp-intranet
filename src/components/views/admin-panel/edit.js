import React, { useState, useEffect } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import Wrapper from '../../partials/Wrapper';
import ViewHeader from '../../misc/ViewHeader';
import { db } from '../../../services/firebase';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminPanelEdit = (props) => {

    const [user, setUser] = useState('fetching')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { _userId } = useParams()

    const fetchUser = async () => {
        try{
            const fetchInfo = await db.collection('users').doc(_userId).get()
            setUser(fetchInfo.data())
            setContactInfoDirect(fetchInfo.data().contactInfo.direct)
            setContactInfoExt(fetchInfo.data().contactInfo.ext)
            setContactInfoPersonalEmail(fetchInfo.data().contactInfo.personalEmail)
            setContactInfoMobile(fetchInfo.data().contactInfo.mobile)
            setEmergencyContactName(fetchInfo.data().emergencyContact.name)
            setEmergencyContactEmail(fetchInfo.data().emergencyContact.email)
            setEmergencyContactMobile(fetchInfo.data().emergencyContact.mobile)
            setRoleTitle(fetchInfo.data().roleTitle)
            setRoleScope(fetchInfo.data().roleScope)
        } catch(error){
            setUser('')
            toast.error("Could not find user information", {autoClose:false, position: toast.POSITION.TOP_CENTER})
            console.log(error)
        }
    }
    
    const [contactInfoDirect, setContactInfoDirect] = useState()
    const [contactInfoExt, setContactInfoExt] = useState()
    const [contactInfoPersonalEmail, setContactInfoPersonalEmail] = useState()
    const [contactInfoMobile, setContactInfoMobile] = useState()
    const [emergencyContactName, setEmergencyContactName] = useState()
    const [emergencyContactEmail, setEmergencyContactEmail] = useState()
    const [emergencyContactMobile, setEmergencyContactMobile] = useState()
    const [manager, setManager] = useState()
    const [manages, setManages] = useState()
    const [roleTitle, setRoleTitle] = useState()
    const [roleScope, setRoleScope] = useState()

    const changeContactInfoDirect = (e) => {
        setContactInfoDirect(e.target.value)
    }

    const changeContactInfoExt = (e) => {
        setContactInfoExt(e.target.value)
    }

    const changeContactInfoPersonalEmail = (e) => {
        setContactInfoPersonalEmail(e.target.value)
    }

    const changeContactInfoMobile = (e) => {
        setContactInfoMobile(e.target.value)
    }

    const changeEmergencyContactName = (e) => {
        setEmergencyContactName(e.target.value)
    }

    const changeEmergencyContactEmail = (e) => {
        setEmergencyContactEmail(e.target.value)
    }

    const changeEmergencyContactMobile = (e) => {
        setEmergencyContactMobile(e.target.value)
    }

    const changeRoleTitle = (e) => {
        setRoleTitle(e.target.value)
    }

    const changeRoleScope = (e) => {
        setRoleScope(e.target.value)
    }

    const handleSubmit = async () => {

        setLoading(true)

        await db.collection('users').doc(_userId).update({
            "contactInfo.direct":contactInfoDirect,
            "contactInfo.ext":contactInfoExt,
            "contactInfo.personalEmail":contactInfoPersonalEmail,
            "contactInfo.mobile":contactInfoMobile,
            "emergencyContact.name":emergencyContactName,
            "emergencyContact.email":emergencyContactEmail,
            "roleTitle":roleTitle,
            "roleScope":roleScope,
        })
        .then(() => {
            history.push(`/admin-panel/${_userId}`)
        })
        .catch(error => {
            console.log(error)
            toast.error("Could not update user information", {autoClose:false, position: toast.POSITION.TOP_CENTER})
        })

        setLoading(false)
        
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
                <h6>No user info found...</h6>
            )
        }

        if(user){
            return(
                <Form onSubmit={(e) => {handleSubmit(e)}}>

                    <h4 className="mb-4">{user.name} Account Information</h4>

                    <h4 className="mb-3">Contact Info</h4>

                    <Form.Group id="direct">
                        <Form.Label><h6>Direct</h6></Form.Label>
                        <Form.Control type="text" value={contactInfoDirect} onChange={e => {changeContactInfoDirect(e)}} required />
                    </Form.Group>

                    <Form.Group id="ext">
                        <Form.Label><h6>Ext</h6></Form.Label>
                        <Form.Control type="text" value={contactInfoExt} onChange={e => {changeContactInfoExt(e)}} required />
                    </Form.Group>

                    <Form.Group id="personal-email">
                        <Form.Label><h6>Personal Email</h6></Form.Label>
                        <Form.Control type="text" value={contactInfoPersonalEmail} onChange={e => {changeContactInfoPersonalEmail(e)}} required />
                    </Form.Group>

                    <Form.Group id="mobile">
                        <Form.Label><h6>Mobile</h6></Form.Label>
                        <Form.Control type="text" value={contactInfoMobile} onChange={e => {changeContactInfoMobile(e)}} required />
                    </Form.Group>

                    <h4 className="mt-4 mb-3">Emergency Contact</h4>

                    <Form.Group id="emergency-contact-name">
                        <Form.Label><h6>Name</h6></Form.Label>
                        <Form.Control type="text" value={emergencyContactName} onChange={e => {changeEmergencyContactName(e)}} required />
                    </Form.Group>

                    <Form.Group id="emergency-contact-email">
                        <Form.Label><h6>Email</h6></Form.Label>
                        <Form.Control type="text" value={emergencyContactEmail} onChange={e => {changeEmergencyContactEmail(e)}} required />
                    </Form.Group>

                    <Form.Group id="emergency-contact-mobile">
                        <Form.Label><h6>Mobile</h6></Form.Label>
                        <Form.Control type="text" value={emergencyContactMobile} onChange={e => {changeEmergencyContactMobile(e)}} required />
                    </Form.Group>

                    <h4 className="mt-4 mb-3">Role Profile</h4>

                    <Form.Group id="emergency-contact-mobile">
                        <Form.Label><h6>Title</h6></Form.Label>
                        <Form.Control type="text" value={roleTitle} onChange={e => {changeRoleTitle(e)}} required />
                    </Form.Group>

                    <Form.Group id="emergency-contact-mobile">
                        <Form.Label><h6>Scope</h6></Form.Label>
                        <Form.Control as="textarea" rows={3} value={roleScope} onChange={e => {changeRoleScope(e)}} required />
                    </Form.Group>

                    <Button disabled={loading} className="w-100 sign-up-btn" onClick={handleSubmit} >Update</Button>

                </Form>
            )
        }

    }

    useEffect(() => {

        fetchUser()

    }, [])

    return(

        <Wrapper>

            <ViewHeader title="Admin Panel" />

            {renderContent()}

        </Wrapper>

    )

}

export default AdminPanelEdit