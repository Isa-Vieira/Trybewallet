import App from "../../App"
import { renderWithRedux, screen } from "./renderWith"
import React from 'react';

describe('Testes requisito 5', () => {
    it('Verifica se a tela inicial é renderizada', () => {
        renderWithRedux(<App />);
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
        expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
        expect(screen.getByText(/Senha/i)).toBeInTheDocument();
    });
})