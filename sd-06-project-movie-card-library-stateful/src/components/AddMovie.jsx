import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clickButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitleInput() {
    const { title } = this.state;
    return (
      <input
        data-testid="title-input"
        type="text"
        id="titleInput"
        name="title"
        value={title}
        onChange={this.handleChange}
      />
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <input
        data-testid="subtitle-input"
        type="text"
        id="subtitleInput"
        name="subtitle"
        value={subtitle}
        onChange={this.handleChange}
      />
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;
    return (
      <input
        data-testid="image-input"
        type="text"
        id="imageInput"
        name="imagePath"
        value={imagePath}
        onChange={this.handleChange}
      />
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <input
        data-testid="storyline-input"
        type="text"
        id="storylineInput"
        name="storyline"
        value={storyline}
        onChange={this.handleChange}
      />
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <input
        data-testid="rating-input"
        type="number"
        id="ratingInput"
        name="rating"
        value={rating}
        onChange={this.handleChange}
      />
    );
  }

  renderGenreInput() {
    const { genre } = this.state;
    return (
      <select
        data-testid="genre-input"
        id="genreInput"
        name="genre"
        value={genre}
        onChange={this.handleChange}
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titleInput">
          Título
          {this.renderTitleInput()}
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
          Subtítulo
          {this.renderSubtitleInput()}
        </label>
        <label data-testid="image-input-label" htmlFor="imageInput">
          Imagem
          {this.renderImageInput()}
        </label>
        <label data-testid="storyline-input-label" htmlFor="storylineInput">
          Sinopse
          {this.renderStorylineInput()}
        </label>
        <label data-testid="rating-input-label" htmlFor="ratingInput">
          Avaliação
          {this.renderRatingInput()}
        </label>
        <label data-testid="genre-input-label" htmlFor="genreInput">
          Gênero
          {this.renderGenreInput()}
        </label>
        <button
          type="button"
          onClick={this.clickButton}
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
