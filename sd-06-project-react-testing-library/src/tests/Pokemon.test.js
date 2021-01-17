import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('testando o arquivo Pokedex', () => {
  it('é renderizado um card com as informações de determinado pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const nameOfPokemon = screen.getByTestId('pokemon-name');
    expect(nameOfPokemon.textContent).toBe('Pikachu');

    const typeOfPokemon = screen.getByTestId('pokemonType');
    expect(typeOfPokemon.textContent).toBe('Electric');

    const weigthOfPokemon = screen.getByTestId('pokemon-weight');
    expect(weigthOfPokemon.textContent).toBe('Average weight:6.0kg');

    const altTextImg = screen.getByAltText('Pikachu sprite');
    const url = 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(altTextImg).toHaveProperty('src', url);
  });

  it('contém um link de navegação para exibir detalhes deste Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const moreDetails = screen.getByText(/More Details/i);
    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails).toHaveAttribute('href', '/pokemons/25');
  });

  it('ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação'
  + 'para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const linkMoreDetails = screen.getByRole('link', { name: /More Details/i });
    fireEvent.click(linkMoreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon'
  + 'cujos detalhes se deseja ver', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');
    // const linkWithId = screen.getByRole('link', { name: '/pokemons/25' });
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');
    const check = screen.getByRole('checkbox');
    fireEvent.click(check);
    expect(check.checked).toEqual(true);
    const altStarImg = screen.getByAltText('Pikachu is marked as favorite');
    expect(altStarImg).toHaveAttribute('src', '/star-icon.svg');
    expect(screen.getByAltText('Pikachu is marked as favorite')).toBeInTheDocument();
  });
});
