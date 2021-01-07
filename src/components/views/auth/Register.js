import React, {useRef, useState} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Switch } from "@blueprintjs/core";
import { useAuth } from '../../../contexts/AuthContext';
import VisibilityIcon from './VisibilityIcon';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/walker-grp-ltd-logo-light.svg';

const Register = () => {

const history = useHistory()

const emailRef = useRef();
const nameRef = useRef()
const passwordRef = useRef();
const passwordConfirmRef = useRef();
const [admin, setAdmin] = useState(false)
const { signUpUser, createUser } = useAuth();
const [hidePass, setHidePass] = useState(true);
const [loading, setLoading] = useState(false);

const changeAdmin = () => {
    setAdmin(!admin)
}

const handleSubmit = async (e) => {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return toast.error('Passwords do not match', {autoClose:false, position: toast.POSITION.TOP_CENTER})
    }

    try{
        setLoading(true);
        await signUpUser(emailRef.current.value.toLowerCase(), passwordRef.current.value);
        createUser(emailRef.current.value, nameRef.current.value, admin)
        history.push('/')
    } catch(error){
        toast.error(error.message, {autoClose:false, position: toast.POSITION.TOP_CENTER})
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

                        <h2 className="text-center mb-4">Register</h2>

                        <Form onSubmit={(e) => {handleSubmit(e)}}>

                            <Form.Group id="email">
                                <Form.Control type="email" ref={emailRef} placeholder="email" required />
                            </Form.Group>

                            <Form.Group id="name">
                                <Form.Control type="text" ref={nameRef} placeholder="name" required />
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label className="d-flex justify-content-end align-items-end">
                                    <VisibilityIcon hidePass={hidePass} setHidePass={setHidePass}/>
                                </Form.Label>
                                <Form.Control type={hidePass ? 'password' : 'text'} ref={passwordRef} placeholder="password" required />
                            </Form.Group>

                            <Form.Group id="password-confirm">
                                <Form.Control type={hidePass ? 'password' : 'text'} ref={passwordConfirmRef} placeholder="confirm password" required />
                            </Form.Group>

                            <Form.Group id="password-confirm" className="mt-4">
                                <Form.Label><h6 className="ml-3">Admin privillages</h6></Form.Label>
                                <Switch className="d-inline ml-3" large onChange={changeAdmin} checked={admin} innerLabelChecked="yes" innerLabel="no" />
                            </Form.Group>

                            <Button disabled={loading} className="w-100 sign-up-btn mt-3" type="submit">Register</Button>

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

export default Register