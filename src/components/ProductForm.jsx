import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      description: '',
      imageUrl: '',
      isFeatured: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.products !== null && props.products.id !== state.id) {
      const { id, name, description, imageUrl, isFeatured } = props.products;
      return {
        id,
        name,
        description,
        imageUrl,
        isFeatured,
      };
    } else {
      return null;
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { id, name, description, imageUrl, isFeatured } = this.state;

    if (name !== '' && imageUrl !== '') {
      this.props.onAdd({ id, name, description, imageUrl, isFeatured });
      this.handleCancel();
    } else {
      alert('Name and photo URL are required fields.');
    }
  }

  handleCancel() {
    this.props.onUpdate();

    this.setState({
      id: null,
      name: '',
      description: '',
      imageUrl: '',
      isFeatured: false,
    });
  }

  render() {
    const { products } = this.props;
    const { name, description, imageUrl, isFeatured } = this.state;

    return (
      <Form className="shadow-sm p-4 border rounded mb-5">
        <FormGroup>
          <Label for="productName">Name</Label>
          <Input
            type="text"
            name="name"
            id="productName"
            value={name}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="productDescription">Description</Label>
          <Input
            type="text"
            name="description"
            id="productDescription"
            value={description}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="productImgUrl">Photo URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="productImgUrl"
            value={imageUrl}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup check className="mb-4">
          <Label check>
            <Input
              type="checkbox"
              name="isFeatured"
              checked={isFeatured}
              onChange={this.handleChange}
            />{' '}
            To be featured?
          </Label>
        </FormGroup>

        <Button className="mr-3" color="primary" onClick={this.handleSubmit}>
          {products !== null ? 'Update' : 'Add'}
        </Button>
        <Button color="secondary" onClick={this.handleCancel}>
          Cancel
        </Button>
      </Form>
    );
  }
}

export default ProductForm;
