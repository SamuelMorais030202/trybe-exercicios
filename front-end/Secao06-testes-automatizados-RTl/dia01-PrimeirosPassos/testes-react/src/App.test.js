import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Testando a tela de inserção de email", () => {

  test('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  test('Verificando se existe dois botões', () => {
    render(<App />);
  
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  
  test('Verificando se existe um botão com o texto Enviar', () => {
    render(<App />);
  
    const buttonEnviar = screen.getByTestId('id-send');
    
    expect(buttonEnviar).toBeInTheDocument();
    expect(buttonEnviar).toHaveProperty('type', 'button');
    expect(buttonEnviar).toHaveValue('Enviar'); 
  });
  
  test('Verifica, se ao digitar o email e clicar em "Enviar" o email é renderizado.', () => {
    render(<App />);
  
    // Acessando elementos
    const inputEmail = screen.getByLabelText('Email');
    const buttonEnviar = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');
  
    // Interagindo com os elementos
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(buttonEnviar);
  
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Valor: teste@teste.com");
  });

})

