import React from 'react';
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'



const Classcard = ({ c_lass: { _id, name, topic, part, room } }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>{_id}</Card.Text>
                    <Card.Text>
                        Topic: {topic}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Part: {part}</ListGroupItem>

                </ListGroup>
                <Card.Body>
                    <Card.Link > Room: {room}</Card.Link>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Classcard;
