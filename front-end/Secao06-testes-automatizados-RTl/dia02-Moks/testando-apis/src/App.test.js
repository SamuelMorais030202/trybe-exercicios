import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// afterEach(() => jest.clearAllMocks());

describe("Testando o componente App.", () => {

  it('Testando a chamada da API', async () => {
    const joke = {
      id: "xlfhanaiw",
      joke: "Whiteboards ... are remarkable",
      status: 200,
    }

    // Primeira forma de simular a chamada da API.
    // global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(joke)
    // }));

    // Segunda forma de simular a chamada de uma API.
    global.fetch = jest.fn(async () => ({
      json: async () => joke
    }));

    render(<App />);

    const renderJoke = await screen.findByText('Whiteboards ... are remarkable');

    expect(renderJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);

  })
})