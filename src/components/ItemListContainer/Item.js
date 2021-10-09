import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

export const Item = ({id, name, price, img, description}) => {
    return (
        <Col md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Text>
                    Precio: $ {price}
                    </Card.Text>
                    <Card.Text>
                    ID del producto: {id}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
