import React from 'react';
import LoginForm from '../Auth/LoginForm';
import RegisterForm from '../Auth/RegisterForm';
import { AuthContext } from '../Contexts/AuthContext';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap'
import { Redirect } from 'react-router';
const Auth = ({ authRoute }) => {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    let body

    /*  if (authLoading)
          body = (
              <div className='d-flex justify-content-center mt-2'>
                  <Spinner animation='border' variant='info' />
              </div>
          )
      else if (isAuthenticated) return <Redirect to='/dashboard' />
  
      else*/
    body = (
        <>

            {authRoute === 'login' && <LoginForm></LoginForm>}
            {authRoute === 'register' && <RegisterForm></RegisterForm>}

        </>
    )
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>TXT</h1>
                    <h4>Web GRADING</h4>
                    {body}
                </div>
            </div>
        </div>

    );
}

export default Auth;
