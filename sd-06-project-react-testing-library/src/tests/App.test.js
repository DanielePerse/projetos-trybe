import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste de todo o arquivo App:', () => {
  it('renderiza o título `Pokédex`', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  it('a página home é renderizada ao carregar a app no caminho de URL /', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('o topo da app deve ter links de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;

    expect(pathname).toBe('/');
    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument();

    const about = screen.getByText(/About/i);
    expect(about).toBeInTheDocument();
    // history.push('/about');
    // expect(pathname).toBe('/about');

    // expect(pathname).toBe('/favorites');
    const favorites = screen.getByText(/Favorite Pokémons/i);
    expect(favorites).toBeInTheDocument();
  });

  it('ao clicar no link Home a app é redirecionada para página inicial', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText(/Home/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('ao clicar no link About a app é redirecionada para página About', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText(/About/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('ao clicar no link de favoritos a app é redirecionada para página favoritos', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText(/Favorite Pokémons/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('ao entrar numa URL desconhecida a app é direcionada para página Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-inexistente');
    expect(screen.getByText(/Page requested not found/i)).toBeInTheDocument();
  });
});
