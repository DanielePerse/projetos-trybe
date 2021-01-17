import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../services/cart';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      cpfId: '',
      phone: '',
      cepId: '',
      address: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getTotalValue() {
    const productArray = Cart.getItemsFromLocalStorage();
    let totalValue = 1 - 1;
    productArray.forEach((product) => {
      totalValue += (product.price * product.amount);
    });
    return totalValue;
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleClick(event) {
    const { fullName, email, cpfId, phone, cepId, address } = this.state;
    if (
      fullName === '' || email === '' || cpfId === '' || phone === ''
      || cepId === '' || address === '') {
      event.preventDefault();
      this.setState({
        errorMessage: 'Todos os campos devem ser preenchidos!',
      });
    } else {
      Cart.removeAll();
    }
  }

  render() {
    const produtos = Cart.getItemsFromLocalStorage();
    const round = 2;
    const { fullName, email, cpfId, phone, cepId, address, errorMessage } = this.state;
    return (
      <div>
        <h1>MLB - Compra 100% segura</h1>
        <br />
        <form>
          <fieldset>
            <legend>Revise seus produtos</legend>
            { produtos.map((produto) => (
              <div key={ produto.id }>
                { produto.amount }
                &nbsp;
                <img src={ produto.thumbnail } alt="imagem produto" />
                &nbsp;
                { produto.title }
                &nbsp;
                R$
                { produto.price }
                &nbsp;
                <br />
              </div>
            )) }
            <br />
            <span>Total a pagar: R$ </span>
            { this.getTotalValue().toFixed(round) }
          </fieldset>
          <br />
          <fieldset>
            <legend>Informações do comprador</legend>
            <input
              type="text"
              name="fullName"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              value={ fullName }
              onChange={ this.handleChange }
              required="required"
            />
            <input
              type="text"
              name="email"
              data-testid="checkout-email"
              placeholder="Email:exemplo@exem.com"
              value={ email }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="cpfId"
              data-testid="checkout-cpf"
              placeholder="CPF"
              value={ cpfId }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="phone"
              data-testid="checkout-phone"
              placeholder="Telefone (XX) XXXX-XXXX"
              value={ phone }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="cepId"
              data-testid="checkout-cep"
              placeholder="CEP"
              value={ cepId }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="address"
              data-testid="checkout-address"
              placeholder="Endereço"
              value={ address }
              onChange={ this.handleChange }
            />
          </fieldset>
          <br />
          <fieldset>
            <legend>Método de pagamento</legend>
            <label htmlFor="boleto">
              <input type="radio" id="boleto" value="bo" name="payment" checked />
              Boleto
            </label>
            &nbsp;
            <label htmlFor="visa">
              <input type="radio" id="visa" value="cardVisa" name="payment" />
              Visa
            </label>
            &nbsp;
            <label htmlFor="mastercard">
              <input type="radio" id="mastercard" value="cardMaster" name="payment" />
              MasterCard
            </label>
            &nbsp;
            <label htmlFor="elo">
              <input type="radio" id="elo" value="cardElo" name="payment" />
              Elo
            </label>
          </fieldset>
        </form>
        <br />
        <div>{ errorMessage }</div>
        <br />
        <Link to="/">
          <button type="button" onClick={ (event) => this.handleClick(event) }>
            COMPRAR
          </button>
        </Link>
      </div>
    );
  }
}

export default Checkout;
