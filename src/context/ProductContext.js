import React from 'react';

const defaultState = [
  {
    id: 1,
    name: 'Product One',
    description: 'Product one description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Product Two',
    description: 'Product two description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: false,
  },
  {
    id: 3,
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

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {
    this.setState({ products: defaultState });
  }

  handleAdd(newProduct) {
    const { products } = this.state;
    if (products.find(product => newProduct.id === product.id)) {
      this.updateItem(newProduct.id, newProduct);
    } else {
      // this not assure that id is unique
      newProduct.id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

      products.push(newProduct);
      this.setState({ products });
    }
  }

  handleDelete(product) {
    const { products } = this.state;
    products.splice(products.indexOf(product), 1);
    this.setState({ products });
  }

  updateItem(id, itemAttributes) {
    var index = this.state.products.findIndex(x => x.id === id);
    if (index === -1) console.log('Invalid');
    else
      this.setState(prevState => ({
        products: [
          ...prevState.products.slice(0, index),
          Object.assign({}, prevState.products[index], itemAttributes),
          ...prevState.products.slice(index + 1),
        ],
      }));
  }

  render() {
    const { products } = this.state;
    const { children } = this.props;

    return (
      <ProductContext.Provider
        value={{
          products,
          actions: {
            add: this.handleAdd,
            delete: this.handleDelete,
          },
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

const ProductContextConsumer = ProductContext.Consumer;

export { ProductContextProvider, ProductContextConsumer };
