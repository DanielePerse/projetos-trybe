import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}>
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  renderInputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <input
        id="textInput"
        type="text"
        data-testid="text-input"
        value={searchText}
        onChange={onSearchTextChange}
      />
    );
  }

  renderCheckboxInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <input
        id="checkboxInput"
        type="checkbox"
        data-testid="checkbox-input"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
      />
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">
          Inclui o texto:
          {this.renderInputText()}
        </label>
        <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          {this.renderCheckboxInput()}
        </label>
        <label htmlFor="selectInput" data-testid="select-input-label">
          Filtrar por gênero
          {this.renderSelect()}
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
