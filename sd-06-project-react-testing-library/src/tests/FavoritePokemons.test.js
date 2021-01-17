import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testando o arquivo FavoritePokemons:', () => {
  it('exibe a msg `No favorite pokemon found`, caso não haja pokémons favoritos', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons />);
    expect(getByText('No favorite pokemon found')).toBeInTheDocument();
  });

  it('exibe todos os cards de pokémons favoritados', () => {
    const { getByRole, history, getByText } = renderWithRouter(<App />);

    const buttonMoreDetails = getByText('More details');
    fireEvent.click(buttonMoreDetails);
    history.push('/pokemons/25');
    const check = getByRole('checkbox');
    fireEvent.click(check);
    expect(check.checked).toEqual(true);

    history.push('/favorites');
    expect(getByText('Pikachu')).toBeInTheDocument();
  });

  it('não exibe nenhum card de pokémon não favoritado', () => {
    const { getByRole, history, getByText, queryByText } = renderWithRouter(<App />);

    const buttonMoreDetails = getByText('More details');
    fireEvent.click(buttonMoreDetails);
    history.push('/pokemons/23');
    const check = getByRole('checkbox');
    expect(check.checked).toEqual(false);

    history.push('/favorites');
    expect(queryByText('Ekans')).not.toBeInTheDocument();
  });
});
