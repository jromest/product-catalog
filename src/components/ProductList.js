import React from 'react';
import { Table, Button } from 'reactstrap';
import ProductForm from '../components/ProductForm';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onEditProduct: null,
    };

    this.onEditHandle = this.onEditHandle.bind(this);
  }

  onEditHandle(product) {
    this.setState({ onEditProduct: product });
  }

  render() {
    const { products } = this.props;
    const { onEditProduct } = this.state;

    return (
      <React.Fragment>
        <ProductForm products={onEditProduct} />
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="w-25">
                  <img src={product.imageUrl} alt={product.name} />
                </td>
                <td className="w-25">{product.name}</td>
                <td className="w-25">{product.description}</td>
                <td className="w-auto">
                  <Button
                    className="mr-3"
                    color="primary"
                    onClick={() => this.onEditHandle(product)}
                  >
                    Edit
                  </Button>
                  <Button color="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}
export default ProductList;
