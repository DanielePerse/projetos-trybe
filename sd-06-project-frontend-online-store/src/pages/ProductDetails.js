import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButton from '../components/CartButton';
import EvaluationForm from '../components/EvaluationForm';
import AddToCartButtonDetails from '../components/AddToCartButtonDetails';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div className="main">
        <Link className="buttonHome" to="/">
          <button type="button">Página Inicial</button>
        </Link>
        <Link className="buttonCart" to="/carrinho">
          <CartButton />
        </Link>
        <h2 className="title" data-testid="product-detail-name">{ product.title }</h2>
        <h2 className="title">{ `R$ ${product.price}` }</h2>
        <div className="imgEspec">
          <img className="image" src={ product.thumbnail } alt={ product.title } />
          <div className="especificacoes">
            <h3>Especificações Técnicas</h3>
            <ul>
              { product.attributes.map((atributo) => (
                <li
                  key={ atributo.name }
                >
                  { `${atributo.name}: ${atributo.value_name}` }
                </li>
              ))}
            </ul>
            <AddToCartButtonDetails product={ product } />
          </div>
        </div>
        <h3 className="title">Avaliações</h3>
        <EvaluationForm productId={ product.id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: PropTypes.array,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
