import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import {Link} from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
const RegisterForm = () => {
    const { registerUser } = useContext(AuthContext); // lấy giá trị từ AuthContext

    const [registerForm, setregisterForm] = useState({
        username: '',
        password: '',
        confirmpassword: ''
    })

    const history = useHistory()
    const { username, password, confirmpassword } = registerForm
    const register = async event => {
        event.preventDefault();
        try {
            const registerData = await registerUser(registerForm);

            if (registerData.success) {
                history.push('/login')
            }
            else {

            }
        } catch (error) {
            console.log(error)
        }


    }
    const onChangeloginForm = event => setregisterForm({
        ...registerForm,
        [event.target.name]: event.target.value
    })




    return <Form onSubmit={register}>
        <Form.Group>
            <Form.Control type='text' placeholder='Username' name='username' value={username}
                onChange={onChangeloginForm} required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='password' placeholder='Username' name='password' value={password}
                onChange={onChangeloginForm} required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='password' placeholder='Confirm Password' name='confirmpassword' value={confirmpassword}
                onChange={onChangeloginForm} required></Form.Control>
        </Form.Group>
        <Button variant='success' type='submit'>Register</Button>
        <p>Has an Acount ?
            <Link to='/login'>
                <Button variant='info' size='sm' className='n1-2'>Login</Button>
            </Link></p>
    </Form>
}

export default RegisterForm;
