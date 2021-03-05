import React, {useRef, useState} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../images/walker-grp-ltd-logo-light.svg';

const Reset = () => {

const emailRef = useRef();
const { resetUserPassword } = useAuth();
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault()

    try{
        setLoading(true);
        await resetUserPassword(emailRef.current.value);
        toast.success('Please check your inbox for more instructions', {autoClose:false, position: toast.POSITION.TOP_CENTER})
    } catch(error) {
        toast.error("Your details didn't match our records", {autoClose:false, position: toast.POSITION.TOP_CENTER})
        console.log(error)
    }

    
    setLoading(false);

}

    return(
        <>
        <div className="auth-view d-flex flex-column-reverse flex-md-row justify-content-center align-items-center" style={{minHeight: '100vh'}}>
            <div className="w-100 my-4 mr-0 mr-md-4 mr-lg-5" style={{maxWidth:'400px'}}>
                <Card>
                    <Card.Body>

                        <h2 className="text-center mb-4">Reset Password</h2>

                        <Form onSubmit={(e) => {handleSubmit(e)}}>

                            <Form.Group id="email">
                                <Form.Control type="email" ref={emailRef} placeholder="email" required />
                            </Form.Group>

                            <Button disabled={loading} className="w-100 sign-up-btn" type="submit" >Reset</Button>

                        </Form>

                        <div className="text-center mt-3">Go back to the homepage <Link to="/">here</Link></div>

                    </Card.Body>
                </Card>
            </div>

            <img className="mt-4 mt-md-0" src={logo} alt="walker grp logo" style={{width: '250px'}} />

        </div>    
        </>
    )
}

export default Reset