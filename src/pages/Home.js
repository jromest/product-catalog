import React from 'react';
import { Container } from 'reactstrap';
import Layout from '../components/Layout';
import ProductCarousel from '../components/ProductCarousel';

const Home = props => (
  <Layout location={props.location}>
    <Container tag="main" role="main" className="pt-4 pb-4">
      <ProductCarousel />
    </Container>
  </Layout>
);

export default Home;
