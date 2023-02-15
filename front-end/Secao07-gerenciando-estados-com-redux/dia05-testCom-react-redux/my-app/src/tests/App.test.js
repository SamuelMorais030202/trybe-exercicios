import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';
import { legacy_createStore as createStore } from 'redux';
// import thunk from 'redux-thunk';
import counterReducer from '../redux/reducers/conuterReducer';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(counterReducer, initialState),
  } = {}
  ) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

describe("Testando o component App", () => {
  it('Testando se o componente App tem dois botões e um campo de texto se iniciando com 0', () => {
    renderWithRedux(<App />)
  
    const buttons = screen.getAllByRole("button");
  
    expect(buttons.length).toBe(2);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Teste se o número renderizado é o mesmo do estado global', () => {
    const initialState = {
      count: 10,
    }

    renderWithRedux(<App />, { initialState });

    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('Testando o click nos botões e o valor renderizado', () => {
    const initialState = {
      count: 0
    }
    
    renderWithRedux(<App />, { initialState });

    const button1 = screen.getByRole("button", { name: /Incrementa 1/i});
    const button2 = screen.getByRole("button", { name: /Incrementa 5/i});

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(button1);
    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(button2);
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  it('Testando o valor da store', () => {
    const { store } = renderWithRedux(<App />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(store.getState().count).toBe(0);

    const button1 = screen.getByRole("button", { name: /Incrementa 1/i});
    expect(button1).toBeInTheDocument();
    userEvent.click(button1);
    expect(store.getState().count).toBe(1);

    const button2 = screen.getByRole("button", { name: /Incrementa 5/i});
    expect(button2).toBeInTheDocument()
    userEvent.click(button2);
    expect(store.getState().count).toBe(6);
  })

})

