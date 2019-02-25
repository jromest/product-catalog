import React from 'react';

const defaultState = [
  {
    name: 'Product One',
    description: 'Product one description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: true,
  },
  {
    name: 'Product Two',
    description: 'Product two description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: false,
  },
  {
    name: 'Product Three',
    description: 'Product three description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: true,
  },
];

const ProductContext = React.createContext();

class ProductContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({ products: defaultState });
  }

  handleAdd(newProduct) {
    const { products } = this.state;
    products.push(newProduct);
    this.setState({ products });
  }

  handleDelete(product) {
    const { products } = this.state;
    products.splice(products.indexOf(product), 1);
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    const { children } = this.props;

    return (
      <ProductContext.Provider
        value={{
          products,
          actions: { delete: this.handleDelete },
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

const ProductContextConsumer = ProductContext.Consumer;

export { ProductContextProvider, ProductContextConsumer };
