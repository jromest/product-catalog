import React from 'react';
import { Container } from 'reactstrap';
import { ProductContextConsumer } from '../context/ProductContext';
import Layout from '../components/Layout';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onEditProduct: null,
    };

    this.onEdit = this.onEdit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onEdit(product) {
    this.setState({ onEditProduct: product });
  }

  onUpdate() {
    this.setState({ onEditProduct: null });
  }

  render() {
    const { onEditProduct } = this.state;

    return (
      <ProductContextConsumer>
        {({ products, actions }) => (
          <Layout location={this.props.location}>
            <Container className="py-4" tag="main" role="main">
              <h1 className="mb-5">Product Management</h1>
              <ProductForm
                products={onEditProduct}
                onAdd={actions.add}
                onUpdate={this.onUpdate}
              />
              <ProductList
                products={products}
                onEdit={this.onEdit}
                onDelete={actions.delete}
              />
            </Container>
          </Layout>
        )}
      </ProductContextConsumer>
    );
  }
}

export default Manage;
