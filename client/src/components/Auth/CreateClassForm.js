import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { classContext } from '../Contexts/ClassContext';
import { AuthContext } from '../Contexts/AuthContext';
const CreateClassForm = () => {
    const { createClass } = useContext(AuthContext); // lấy giá trị từ AuthContext

    const [createclassForm, setcreateclassForm] = useState({
        name: '',
        topic: '',
        part: '',
        room: '',

    })

    const history = useHistory()
    const { name, topic, part, room } = createclassForm
    const createclass = async event => {
        event.preventDefault();
        await createClass(createclassForm);
        // history.push('/dashboard')


    }
    const onChangeCreateClass = event => setcreateclassForm({
        ...createclassForm,
        [event.target.name]: event.target.value
    })




    return <Form onSubmit={createclass}>
        <Form.Group>
            <Form.Control type='input' placeholder='Name' name='name' value={name}
                onChange={onChangeCreateClass} required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='input' placeholder='Part' name='part' value={part}
                onChange={onChangeCreateClass} ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='input' placeholder='Topic' name='topic' value={topic}
                onChange={onChangeCreateClass} ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='input' placeholder='Room' name='room' value={room}
                onChange={onChangeCreateClass} ></Form.Control>
        </Form.Group>
        <Button variant='success' type='submit'>CREATE</Button>

    </Form>
}

export default CreateClassForm;
