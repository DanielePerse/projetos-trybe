import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Loading from './Loading';
import './categoriesList.css';


class CategoriesList extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      loading: true,
      categoryID: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
      loading: false,
    });
  }

  handleClick({ target }) {
    this.setState({
      categoryID: target.id,
    }, () => {
      const { handleID } = this.props;
      const { categoryID } = this.state;
      handleID(categoryID);
    });
  }

  render() {
    const { loading, categories } = this.state;

    return (
      <div className="category-container">
        <ul>
          { loading ? <Loading />
            : categories.map((category) => (
              <button
                type="button"
                onClick={ this.handleClick }
                key={ category.id }
                id={ category.id }
                data-testid="category"
              >
                { (category.name).toUpperCase() }
              </button>)) }
        </ul>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  handleID: PropTypes.func.isRequired,
};

export default CategoriesList;
