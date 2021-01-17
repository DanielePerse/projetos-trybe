import React from 'react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testando todo o arquivo NotFound:', () => {
  it('a página deve conter a tag `h2` com o texto `Page requested not found 😭`', () => {
    const { getByText, container } = renderWithRouter(<NotFound />);
    const tagH2 = container.querySelector('h2');

    expect(getByText('Page requested not found')).toBeInTheDocument();
    expect(tagH2).toBeInTheDocument();
  });

  it('a página deve mostrar imagem', () => {
    const { container } = renderWithRouter(<NotFound />);
    const tagImg = container.querySelector('img');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(tagImg).toHaveProperty('src', url);
  });
});
