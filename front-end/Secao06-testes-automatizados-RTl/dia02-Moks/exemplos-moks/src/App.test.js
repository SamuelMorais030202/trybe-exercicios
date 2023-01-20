// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Testando moks', () => {
  function num () {
    return Math.floor(Math.random() * 100);
  }

  function soma () {
    return num() + num()
  }

  it('Iniciando com moks', () => {
    num = jest.fn().mockReturnValue(8);

    expect(num()).toBe(8);
  });
 
  it('Testando a função de soma', () => {
    num = jest.fn().mockReturnValue(2);

    expect(soma()).toBe(4);
  })
})