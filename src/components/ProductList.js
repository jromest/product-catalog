import React from 'react';
import { Table, Button } from 'reactstrap';

const ProductList = () => (
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
      <tr>
        <td className="w-25">
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card cap"
          />
        </td>
        <td className="w-25">Otto</td>
        <td className="w-25">@mdo</td>
        <td className="w-auto">
          <Button className="mr-3" color="primary">
            Edit
          </Button>
          <Button color="danger">Delete</Button>
        </td>
      </tr>
      <tr>
        <td className="w-25">
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card cap"
          />
        </td>
        <td className="w-25">Otto</td>
        <td className="w-25">@mdo</td>
        <td className="w-auto">
          <Button className="mr-3" color="primary">
            Edit
          </Button>
          <Button color="danger">Delete</Button>
        </td>
      </tr>
      <tr>
        <td className="w-25">
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card cap"
          />
        </td>
        <td className="w-25">Otto</td>
        <td className="w-25">@mdo</td>
        <td className="w-auto">
          <Button className="mr-3" color="primary">
            Edit
          </Button>
          <Button color="danger">Delete</Button>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default ProductList;
