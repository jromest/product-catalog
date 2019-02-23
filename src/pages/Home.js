import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';
import ProductCarousel from '../components/ProductCarousel';
import ProductCard from '../components/ProductCard';

const Home = props => (
  <Layout location={props.location}>
    <Container className="py-4" tag="main" role="main">
      <ProductCarousel />
      <Row className="pt-3">
        <Col className="py-4" sm={12} md={6} lg={4}>
          <ProductCard />
        </Col>
        <Col className="py-4" sm={12} md={6} lg={4}>
          <ProductCard />
        </Col>
        <Col className="py-4" sm={12} md={6} lg={4}>
          <ProductCard />
        </Col>
        <Col className="py-4" sm={12} md={6} lg={4}>
          <ProductCard />
        </Col>
        <Col className="py-4" sm={12} md={6} lg={4}>
          <ProductCard />
        </Col>
        <Col className="py-4" sm={12} md={6} lg={4}>
          <ProductCard />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Home;
