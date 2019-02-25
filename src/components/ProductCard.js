import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const ProductCard = props => {
  const { name, description, imageUrl, dateCreated } = props.product;
  return (
    <div>
      <Card className="shadow">
        <CardImg top width="100%" src={imageUrl} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>
            <small className="text-muted">
              Date created{' '}
              {new Date(dateCreated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
