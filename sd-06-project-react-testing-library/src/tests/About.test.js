import React from 'react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('Testando todo o arquivo about:', () => {
  it('a página contém informações sobre a Pokédex', () => {
    const { getByText } = renderWithRouter(<About />);
    expect(getByText(/This application simulates a Pokédex/i)).toBeInTheDocument();
  });

  it('a página contém um heading `h2` com o texto `About Pokédex`', () => {
    const { getByText } = renderWithRouter(<About />);
    expect(getByText('About Pokédex')).toBeInTheDocument();
  });

  it('a página contém 2 parágrafos sobre a Pokedex', () => {
    const { container } = renderWithRouter(<About />);
    const number = 2;
    const tagH2 = container.querySelectorAll('p');
    expect(tagH2).toHaveLength(number);
  });

  it('a página contém imagem de uma Pokedex', () => {
    const { getByAltText, container } = renderWithRouter(<About />);
    const tagImg = container.querySelector('img');
    const url = 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(getByAltText('Pokédex')).toBeInTheDocument();
    expect(tagImg).toHaveProperty('src', url);
  });
});
