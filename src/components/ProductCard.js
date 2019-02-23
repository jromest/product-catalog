import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const ProductCard = props => {
  const { name, description, imageUrl } = props.product;
  return (
    <div>
      <Card className="shadow-sm">
        <CardImg top width="100%" src={imageUrl} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
