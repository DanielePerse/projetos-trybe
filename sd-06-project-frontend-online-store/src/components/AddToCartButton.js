import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../services/cart';
import './addToCartButton.css';

class AddToCartButton extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => { Cart.addItem(product); } }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default AddToCartButton;

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    attributes: PropTypes.array,
  }).isRequired,
};
