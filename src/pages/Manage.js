import React from 'react';
import { Container } from 'reactstrap';
import Layout from '../components/Layout';
import ProductForm from '../components/ProductForm';

const Manage = props => (
  <Layout location={props.location}>
    <Container className="py-4" tag="main" role="main">
      <ProductForm />
    </Container>
  </Layout>
);

export default Manage;
