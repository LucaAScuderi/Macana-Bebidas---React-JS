import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({
  id,
  name,
  price,
  img,
  description,
  quantity,
  category,
}) => {
  return (
    <Col md={4} lg={3} className="my-5 d-flex justify-content-center">
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <Card className="bg-dark text-white" style={{ width: "15rem" }}>
          <Card.Img variant="top" src={img} meta={name} />
          <Card.Body className="d-grid">
            <Card.Title className="h6">
              {name} {description} {quantity}
            </Card.Title>

            <Card.Text className="mt-3 mb-3 d-flex justify-content-center h5">
              $ {price},00
            </Card.Text>

            <Button variant="btn btn-outline-secondary text-white">
              Ver detalle
            </Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
