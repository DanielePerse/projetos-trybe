import React from 'react';
import cartIcon from '../images/shopping_cart_white.png';
import './cartButton.css';

class CartButton extends React.Component {
  render() {
    return (
      <button className="cart-button" type="button" data-testid="shopping-cart-button">
        <img src={ cartIcon } alt="Pictograma de carrinho de compras" />
      </button>
    );
  }
}

export default CartButton;
