import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('testando o arquivo Pokedex', () => {
  it('exibe o próximo Pokémon quando o botão `Próximo pokémon` é clicado', () => {
    const { getByRole, queryByText } = renderWithRouter(<App />);

    const buttonNextPokemon = getByRole('button', { name: 'Próximo pokémon' });
    fireEvent.click(buttonNextPokemon);
    const charmander = queryByText('Charmander');
    expect(charmander).toBeInTheDocument();
  });

  it('é mostrado apenas um pokemon por vez', () => {
    const { getByRole, getAllByTestId } = renderWithRouter(<App />);

    const buttonNextPokemon = getByRole('button', { name: 'Próximo pokémon' });
    fireEvent.click(buttonNextPokemon);
    const element = getAllByTestId('pokemon-name');
    expect(element).toHaveLength(1);
  });

  it('verifica se a Pokédex tem os botões de filtro', () => {
    const { history, getByText, getByRole } = renderWithRouter(<App />);

    history.push('/');
    const buttonElectric = getByRole('button', { name: 'Electric' });
    fireEvent.click(buttonElectric);
    expect(getByText('Pikachu')).toBeInTheDocument();
    expect(buttonElectric).toBeDefined();
  });

  it('a Pokédex contém um botão para resetar o filtro', () => {
    const { history, getByRole, queryByText } = renderWithRouter(<App />);

    history.push('/');
    const buttonAll = getByRole('button', { name: 'All' });
    const buttonNextPokemon = getByRole('button', { name: 'Próximo pokémon' });
    const buttonElectric = getByRole('button', { name: 'Electric' });

    expect(buttonAll).toHaveTextContent('All');

    fireEvent.click(buttonElectric);
    expect(queryByText('Pikachu')).toBeInTheDocument();
    expect(buttonNextPokemon).toBeDisabled();
    fireEvent.click(buttonAll);
    expect(buttonNextPokemon).toBeDefined();
    fireEvent.click(buttonNextPokemon);
    expect(queryByText('Charmander')).toBeInTheDocument();

    expect(buttonAll).toBeDefined();
  });

  it('é criado, dinamicamente, um botão de filtro para cada tipo de Pokémon', () => {
    const { history, getAllByTestId } = renderWithRouter(<App />);
    // const number = 7;
    history.push('/');

    const arrayOfTypes = pokemons.map((pokemon) => pokemon.type);
    // fonte: https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-vetor-em-javascript
    const typesOfPokemon = arrayOfTypes
      .filter((este, i) => arrayOfTypes.indexOf(este) === i);

    const buttons = getAllByTestId('pokemon-type-button');
    typesOfPokemon.forEach((typeOfPokemon) => {
      const buttonOfType = buttons
        .filter((button) => button.textContent === typeOfPokemon);
      expect(buttonOfType.length).toBe(1);
      expect(buttonOfType[0].textContent).toBe(typeOfPokemon);
    });
  });

  it('O botão de `Próximo pokémon` deve ser desabilitado quando a lista filtrada'
  + 'de Pokémons tiver um só pokémon', () => {
    const { history, getByRole, queryByText } = renderWithRouter(<App />);

    history.push('/');
    const buttonNextPokemon = getByRole('button', { name: 'Próximo pokémon' });
    const buttonElectric = getByRole('button', { name: 'Electric' });

    fireEvent.click(buttonElectric);
    expect(queryByText('Pikachu')).toBeInTheDocument();
    expect(queryByText('Encountered pokémons')).toBeInTheDocument();
    expect(buttonNextPokemon).toBeDisabled();
  });
});
