import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

export const Item = ({id, name, price, img, description, quantity, category}) => {
    return (
        <Col md={3} className="my-5 d-flex justify-content-center">
            <Card className="bg-dark text-white" style={{ width: '16rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="d-grid">
                    <Card.Title>
                        {name} {description} {quantity}
                    </Card.Title>
                    
                    <Card.Text className="mt-3 d-flex justify-content-center">
                    $ {price},00
                    </Card.Text>
                    
                    <Card.Text className="d-flex justify-content-center">
                    ID del producto: {id}
                    </Card.Text>
                    
                    <Button variant="btn btn-outline-light btn-sm">Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
