import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import Wrapper from '../../partials/Wrapper';
import ViewHeader from '../../misc/ViewHeader';

const AdminPanelEdit = (props) => {

    const user = props.location.state.user;
    const [loading, setLoading] = useState(false);
    
    const [contactInfoDirect, setContactInfoDirect] = useState(user.contactInfo.direct)
    const [contactInfoExt, setContactInfoExt] = useState(user.contactInfo.ext)
    const [contactInfoPersonalEmail, setContactInfoPersonalEmail] = useState(user.contactInfo.personalEmail)
    const [contactInfoMobile, setContactInfoMobile] = useState(user.contactInfo.mobile)
    const [emergencyContactName, setEmergencyContactName] = useState(user.emergencyContact.name)
    const [emergencyContactEmail, setEmergencyContactEmail] = useState(user.emergencyContact.email)
    const [emergencyContactMobile, setEmergencyContactMobile] = useState(user.emergencyContact.mobile)
    const [manager, setManager] = useState(user.manager)
    const [manages, setManages] = useState(user.manages)
    const [roleTitle, setRoleTitle] = useState(user.roleTitle)
    const [roleScope, setRoleScope] = useState(user.roleScope)

    const handleSubmit = () => {
        
    }

    const renderContent = () => {

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
                        <Form.Control type="text" value={contactInfoDirect} required />
                    </Form.Group>

                    <Form.Group id="ext">
                        <Form.Label><h6>Ext</h6></Form.Label>
                        <Form.Control type="text" value={contactInfoExt} required />
                    </Form.Group>

                    <Form.Group id="personal-email">
                        <Form.Label><h6>Personal Email</h6></Form.Label>
                        <Form.Control type="text" value={contactInfoPersonalEmail} required />
                    </Form.Group>

                    <Form.Group id="mobile">
                        <Form.Label><h6>Mobile</h6></Form.Label>
                        <Form.Control type="text" value={contactInfoMobile} required />
                    </Form.Group>

                    <h4 className="mt-4 mb-3">Emergency Contact</h4>

                    <Form.Group id="emergency-contact-name">
                        <Form.Label><h6>Name</h6></Form.Label>
                        <Form.Control type="text" value={emergencyContactName} required />
                    </Form.Group>

                    <Form.Group id="emergency-contact-email">
                        <Form.Label><h6>Email</h6></Form.Label>
                        <Form.Control type="text" value={emergencyContactEmail} required />
                    </Form.Group>

                    <Form.Group id="emergency-contact-mobile">
                        <Form.Label><h6>Mobile</h6></Form.Label>
                        <Form.Control type="text" value={emergencyContactMobile} required />
                    </Form.Group>

                    <h4 className="mt-4 mb-3">Role Profile</h4>

                    <Form.Group id="emergency-contact-mobile">
                        <Form.Label><h6>Title</h6></Form.Label>
                        <Form.Control type="text" value={roleTitle} required />
                    </Form.Group>

                    <Form.Group id="emergency-contact-mobile">
                        <Form.Label><h6>Scope</h6></Form.Label>
                        <Form.Control as="textarea" rows={3} value={roleScope} required />
                    </Form.Group>

                    <Button disabled={loading} className="w-100 sign-up-btn" type="submit" >Update</Button>

                </Form>
            )
        }

    }

    return(

        <Wrapper>

            <ViewHeader title="Admin Panel" />

            {renderContent()}

        </Wrapper>

    )

}

export default AdminPanelEdit