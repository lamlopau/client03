import React from 'react';
import Header from './Header';
import Classcard from './ClassCard';
import { classContext } from '../Contexts/ClassContext';
import { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthContext';
const Dashboard = () => {

    const {
        class_State: { c_lass, classes, classesLoading },
        getClasses,

    } = useContext(AuthContext)

    useEffect(() => getClasses(), [])

    return (
        <div>
            <Header></Header>
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                {classes.map(c_lass => (
                    <Col className='my-2'>
                        <Classcard c_lass={c_lass} />
                    </Col>
                ))}
            </Row>

        </div>
    );
}

export default Dashboard;
