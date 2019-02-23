import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const ProductCard = props => (
  <div>
    <Card className="shadow-sm">
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </Card>
  </div>
);

export default ProductCard;
