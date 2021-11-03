import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
const Login = () => {
    const { loginUser } = useContext(AuthContext); // lấy giá trị từ AuthContext

    const [loginForm, setloginForm] = useState({
        username: '',
        password: ''
    })
    const [alert, setAlert] = useState(null)

    const history = useHistory()
    const { username, password } = loginForm
    const login = async event => {
        event.preventDefault();
        try {
            const loginData = await loginUser(loginForm);

            if (loginData.success) {
                history.push('/dashboard')
            }
            else {
                setAlert({ type: 'danger', message: loginData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error)
        }


    }
    const onChangeloginForm = event => setloginForm({ ...loginForm, [event.target.name]: event.target.value })
    return <Form onSubmit={login}>
        <Form.Group>
            <Form.Control type='text' placeholder='Username' name='username' value={username}
                onChange={onChangeloginForm} required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='password' placeholder='Password' name='password' value={password}
                onChange={onChangeloginForm} required></Form.Control>
        </Form.Group>
        <Button variant='success' type='submit'>Login</Button>
        <p>Dont have an Acount ?
            <Link to='/register'>
                <Button variant='info' size='sm'
                    className='n1-2'>Register</Button>
            </Link></p>
    </Form>
}

export default Login;
