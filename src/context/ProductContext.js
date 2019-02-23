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
  }

  componentDidMount() {
    this.setState({ products: defaultState });
  }

  render() {
    const { products } = this.state;
    const { children } = this.props;

    return (
      <ProductContext.Provider
        value={{
          products,
          actions: null,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

const ProductContextConsumer = ProductContext.Consumer;

export { ProductContextProvider, ProductContextConsumer };
