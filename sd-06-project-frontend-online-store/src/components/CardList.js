import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';
import CategoriesList from './CategoriesList';
import Cart from '../services/cart';
import NoSearching from './NoSearching';
import Loading from './Loading';
import './cardList.css';

class CardList extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      value: '',
      products: [],
      categoryId: '',
      empty: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCard = this.fetchCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickID = this.handleClickID.bind(this);
  }

  componentDidMount() {
    Cart.createStorage();
  }

  handleClick() {
    const { value } = this.state;
    if (value !== '' || value != null) {
      this.setState({
        loading: true,
      });
      this.fetchCard('');
    }
  }

  handleClickID(catID) {
    this.setState({
      categoryId: catID,
      loading: true,
    }, () => {
      const { categoryId } = this.state;
      this.fetchCard(categoryId);
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async fetchCard(id) {
    const { value } = this.state;
    const card = await getProductsFromCategoryAndQuery(id, value);
    const { results } = card;
    const noResults = 0;
    this.setState({
      loading: false,
      products: results,
      empty: (results.length === noResults),
    });
  }

  render() {
    const { products, value, empty, loading } = this.state;
    return (
      <div className="card-container">
        <div className="search-container">
          <input
            data-testid="query-input"
            value={ value }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </div>
        <CategoriesList handleID={ this.handleClickID } />
        <div className="card-list">
          { loading ? <Loading /> : products.map((product) => (
            <Card product={ product } key={ product.id } />)) }
          { (empty != null && empty) ? <NoSearching /> : false }
        </div>
      </div>
    );
  }
}

export default CardList;
