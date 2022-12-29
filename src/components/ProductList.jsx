import React from 'react';
import { Table, Button } from 'reactstrap';

const ProductList = ({ products, onEdit, onDelete }) => (
  <Table striped bordered responsive>
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Date Created</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => (
        <tr key={product.id}>
          <td className="w-25">
            <img className="w-100" src={product.imageUrl} alt={product.name} />
          </td>
          <td className="w-25">{product.name}</td>
          <td className="w-25">{product.description}</td>
          <td className="w-25">
            {new Date(product.dateCreated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </td>
          <td className="w-auto">
            <Button
              className="mb-3 w-100"
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
