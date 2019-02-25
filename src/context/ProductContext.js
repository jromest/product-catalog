import React from 'react';

const defaultState = [
  {
    id: 1,
    name: 'Product One',
    description: 'Product one description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: true,
    dateCreated: '08/19/2019',
  },
  {
    id: 2,
    name: 'Product Two',
    description: 'Product two description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: false,
    dateCreated: '02/23/2019',
  },
  {
    id: 3,
    name: 'Product Three',
    description: 'Product three description',
    imageUrl:
      'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    isFeatured: true,
    dateCreated: '05/04/2019',
  },
];

const setData = data =>
  window.localStorage.setItem('data', JSON.stringify(data));

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
    if (window.localStorage.getItem('data') === null) {
      setData(defaultState);
    }

    const data = window.localStorage.getItem('data');
    this.setState({ products: JSON.parse(data) });
  }

  componentWillUnmount() {
    window.localStorage.clear();
  }

  handleAdd(newProduct) {
    const { products } = this.state;
    if (products.find(product => newProduct.id === product.id)) {
      this.updateItem(newProduct.id, newProduct);
    } else {
      // this not assure that id is unique
      newProduct.id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
      newProduct.dateCreated = new Date().toLocaleDateString('en-US');

      products.push(newProduct);
      this.setState({ products });

      setData(products);
    }
  }

  handleDelete(product) {
    const { products } = this.state;
    products.splice(products.indexOf(product), 1);
    this.setState({ products });
    setData(products);
  }

  updateItem(id, itemAttributes) {
    const { products } = this.state;
    const index = this.state.products.findIndex(x => x.id === id);

    const updatedProducts = [
      ...products.slice(0, index),
      Object.assign({}, products[index], itemAttributes),
      ...products.slice(index + 1),
    ];

    if (index === -1) console.log('Invalid');
    else
      this.setState({
        products: updatedProducts,
      });

    setData(updatedProducts);
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
