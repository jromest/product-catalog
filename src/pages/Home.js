import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ProductContextConsumer } from '../context/ProductContext';
import Layout from '../components/Layout';
import ProductCarousel from '../components/ProductCarousel';
import ProductCard from '../components/ProductCard';

const Home = props => (
  <ProductContextConsumer>
    {({ products }) => (
      <Layout location={props.location}>
        {products && (
          <Container className="py-4" tag="main" role="main">
            <ProductCarousel
              featuredProducts={products.filter(product => product.isFeatured)}
            />
            <Row className="pt-3">
              {products
                .sort(
                  (first, second) =>
                    new Date(first.dateCreated) - new Date(second.dateCreated)
                )
                .map(product => (
                  <Col key={product.id} className="py-4" sm={12} md={6} lg={4}>
                    <ProductCard product={product} />
                  </Col>
                ))}
            </Row>
          </Container>
        )}
      </Layout>
    )}
  </ProductContextConsumer>
);

export default Home;
