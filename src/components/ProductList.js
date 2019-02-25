import React from 'react';
import { Table, Button } from 'reactstrap';

const ProductList = ({ products, onEdit, onDelete }) => (
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
              onClick={() => onEdit(product)}
            >
              Edit
            </Button>
            <Button color="danger" onClick={() => onDelete(product)}>
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ProductList;
