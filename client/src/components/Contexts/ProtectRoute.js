import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Spinner } from 'react-bootstrap';

const Protectroute = ({ component: Component, ...rest }) => {
    const {
        authState: { AuthLoading, isAuthenticated }
    } = useContext(AuthContext)
    /*  if (AuthLoading)
          return (
              <div className='spinner-container'>
                  <Spinner animation='border' variant='info' />
              </div>
          )*/
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <>

                        <Component {...rest} {...props} />
                    </>
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    )


}

export default Protectroute;
