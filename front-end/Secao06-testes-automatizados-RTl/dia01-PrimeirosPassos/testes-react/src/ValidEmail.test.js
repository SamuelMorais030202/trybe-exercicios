import React from "react";
import { screen, render } from "@testing-library/react";
import ValidEmail from "./components/ValidEmail";

test('Testando um componente caso o email seja válido', () => {
  const testEmail = 'test@test.com';

  render(<ValidEmail email={ testEmail } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
})