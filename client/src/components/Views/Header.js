import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import CreateClassForm from '../Auth/CreateClassForm';
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">GRADING SYSTEM</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="#class">
                            <DropdownButton
                                id="dropdown-button-dark-example2"
                                variant="secondary"
                                menuVariant="dark"
                                title="CLASS"
                                className="mt-2"
                            >
                                <Dropdown.Item href="#/action-1" >
                                    <span variant="primary" onClick={handleShow}>
                                        Create A Class
                                    </span>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <CreateClassForm></CreateClassForm>
                                        </Modal.Body>

                                    </Modal>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1" >
                                    Join A Class
                                </Dropdown.Item>

                            </DropdownButton>

                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
