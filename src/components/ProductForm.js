import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ProductForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="productName">Name</Label>
          <Input type="text" name="name" id="productName" />
        </FormGroup>

        <FormGroup>
          <Label for="productDescription">Description</Label>
          <Input type="text" name="description" id="productDescription" />
        </FormGroup>

        <FormGroup>
          <Label for="productImgUrl">Photo URL</Label>
          <Input type="text" name="photo-url" id="productImgUrl" />
        </FormGroup>

        <FormGroup check className="mb-4">
          <Label check>
            <Input type="checkbox" /> To be featured?
          </Label>
        </FormGroup>

        <Button color="primary">Save/Update</Button>
      </Form>
    );
  }
}

export default ProductForm;
