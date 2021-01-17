import React from 'react';
import PropTypes from 'prop-types';
import { saveEvaluation, getEvaluations } from '../services/api';
import EstrelaPintada from '../images/estrela.png';
import Contorno from '../images/contorno-estrela.png';
import './EvaluationForm.css';

class EvaluationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      texto: '',
      estrela: 0,
    };
    this.renderText = this.renderText.bind(this);
    this.textChange = this.textChange.bind(this);
    this.clearText = this.clearText.bind(this);
    this.renderClick = this.renderClick.bind(this);
    this.printStar = this.printStar.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    const evaluations = getEvaluations(productId);
    if (evaluations != null) {
      evaluations.forEach((evaluation) => {
        this.renderText(evaluation.email, evaluation.texto, evaluation.estrela);
      });
    }
  }

  textChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clearText() {
    this.setState({
      email: '',
      texto: '',
    });
  }

  printStar(id) {
    this.setState({ estrela: id });
    const um = 1;
    const dois = 2;
    const tres = 3;
    const quatro = 4;
    const cinco = 5;
    document.getElementById('1').src = ((id >= um) ? EstrelaPintada : Contorno);
    document.getElementById('2').src = ((id >= dois) ? EstrelaPintada : Contorno);
    document.getElementById('3').src = ((id >= tres) ? EstrelaPintada : Contorno);
    document.getElementById('4').src = ((id >= quatro) ? EstrelaPintada : Contorno);
    document.getElementById('5').src = ((id >= cinco) ? EstrelaPintada : Contorno);
  }

  renderText(email, texto, estrela) {
    const user = document.createElement('span');
    user.innerText = email;
    user.className = 'inputAv';
    const textsDiv = document.getElementById('texts-div');
    const comment = document.createElement('p');
    comment.className = 'inputAv';
    comment.innerText = texto;

    const fim = 5;
    for (let i = 1; i <= fim; i += 1) {
      const img = document.createElement('img');
      img.className = 'inputAv';
      img.src = (i <= estrela) ? EstrelaPintada : Contorno;
      textsDiv.appendChild(img);
    }

    const br = document.createElement('br');
    textsDiv.appendChild(br);
    textsDiv.appendChild(user);
    textsDiv.appendChild(comment);
    const hr = document.createElement('hr');
    textsDiv.appendChild(hr);
  }

  renderClick(productId) {
    const { email, texto, estrela } = this.state;

    this.renderText(email, texto, estrela);

    const evaluation = {
      email,
      texto,
      estrela,
    };
    saveEvaluation(productId, evaluation);
    this.clearText();
    const zero = 0;
    this.printStar(zero);
  }

  render() {
    const { email, texto } = this.state;
    const { productId } = this.props;
    const um = 1;
    const dois = 2;
    const tres = 3;
    const quatro = 4;
    const cinco = 5;
    return (
      <div className="main-div" id="main-div">
        <fieldset>
          <div className="estrelas">
            <button
              type="button"
              onClick={ () => this.printStar(um) }
              className="Link"
            >
              <img id="1" src={ Contorno } alt="img" />
            </button>
            <button
              type="button"
              onClick={ () => this.printStar(dois) }
              className="Link"
            >
              <img id="2" src={ Contorno } alt="img" />
            </button>
            <button
              type="button"
              onClick={ () => this.printStar(tres) }
              className="Link"
            >
              <img id="3" src={ Contorno } alt="img" />
            </button>
            <button
              type="button"
              onClick={ () => this.printStar(quatro) }
              className="Link"
            >
              <img id="4" src={ Contorno } alt="img" />
            </button>
            <button
              type="button"
              onClick={ () => this.printStar(cinco) }
              className="Link"
            >
              <img id="5" src={ Contorno } alt="img" />
            </button>
          </div>
          <form>
            <br />
            <input
              type="email"
              placeholder="Email"
              onChange={ this.textChange }
              name="email"
              value={ email }
              className="input"
            />
            <br />
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem(opcional)"
              rows="5"
              cols="40"
              onChange={ this.textChange }
              name="texto"
              value={ texto }
              className="input"
            />
            <br />
            <button
              className="buttonAvaliar"
              onClick={ () => { this.renderClick(productId); } }
              type="button"
            >
              Avaliar
            </button>
          </form>
        </fieldset>
        <div id="texts-div" />
      </div>
    );
  }
}

EvaluationForm.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default EvaluationForm;
