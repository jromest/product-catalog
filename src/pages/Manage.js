import React from 'react';
import { Container } from 'reactstrap';
import { ProductContextConsumer } from '../context/ProductContext';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

const Manage = props => (
  <ProductContextConsumer>
    {({ products, actions }) => (
      <Layout location={props.location}>
        <Container className="py-4" tag="main" role="main">
          <h1 className="mb-5">Product Management</h1>
          <ProductList products={products} onDelete={actions.delete} />
        </Container>
      </Layout>
    )}
  </ProductContextConsumer>
);

export default Manage;
