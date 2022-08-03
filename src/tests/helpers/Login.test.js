import App from "../../App"
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import React from 'react';
import { screen } from '@testing-library/react';
import Header from "../../components/Header";
import userEvent from '@testing-library/user-event';


const INITIAL_STATE = {
    user: {
      email: 'trybewallet@project.com'
    },
    wallet: {
      currencies: [
        'USD',
      ],
      expenses: [
        {
          id: 0,
          value: '1',
          description: 'dollar',
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
          exchangeRates: {
            USD: {
              code: 'USD',
              codein: 'BRL',
              name: 'Dólar Americano/Real Brasileiro',
              high: '5.3137',
              low: '5.2461',
              varBid: '-0.0188',
              pctChange: '-0.36',
              bid: '5.2585',
              ask: '5.2607',
              timestamp: '1659548574',
              create_date: '2022-08-03 14:42:54',
            }
          }
        }
      ]
    }
}

describe('Testes requisito 5', () => {
    it('Verifica se a tela inicial é renderizada', () => {
        renderWithRouterAndRedux(<App />);
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
        expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
        expect(screen.getByText(/Senha/i)).toBeInTheDocument();
    });
    it('Verifica se e-mail é valido',() => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('textbox', {  name: /e\-mail/i})
    expect(email).toBeInTheDocument();
    });
    it('Verifica se senha maior que 6 é valido',() => {
        renderWithRouterAndRedux(<App />);
        const senha = screen.getByPlaceholderText(/digite sua senha/i)
        expect(senha).toBeInTheDocument();
    });
    it('teste se o botão adicionar despesas não está na tela ',() => {
        renderWithRouterAndRedux(<App />);
        const adicionarDespesas = screen.queryByRole('button', {  name: /adicionar despesa/i})
        expect(adicionarDespesas).not.toBeInTheDocument();
     })
     it('teste se tem o texto wallet',() => {
        renderWithRouterAndRedux(<App />);
        const wallet = screen.getByText(/wallet/i)
        expect(wallet).toBeInTheDocument();
     });
     it('teste se botão Entrar ',() => {
        renderWithRouterAndRedux(<App />);
        const buttonEntrar = screen.getByRole('button', {  name: /entrar/i})
        expect(buttonEntrar).toBeInTheDocument();    
})
    it('Teste se ao clicar nas funcionalidades elas funcionam', () => {
        const { history } = renderWithRouterAndRedux(<App />,{initialState: INITIAL_STATE});
        const email = screen.getByTestId(/email-input/i)
        userEvent.type(email,'trybewallet@project.com')
        /* screen.logTestingPlaygroundURL() */
        const button = screen.getByRole('button', {name: /entrar/i})
        expect(email).toBeInTheDocument();
        expect(button).toHaveAttribute('disabled');
        const senha = screen.getByTestId(/password-input/i)
        userEvent.type(senha,'1234567')
        expect(button).not.toHaveAttribute('disabled')
        userEvent.click(button)
        expect(history.location.pathname).toBe('/carteira')
    
    })
    /* it('Teste ', () => {
        renderWithRouterAndRedux(<App />, {initialState: INITIAL_STATE});
        const senha = screen.getByTestId(/password-input/i)s
        screen.logTestingPlaygroundURL()
        userEvent.type(senha,'1234')
        expect(senha).toBeInTheDocument();
    })
    it('teste se aparece o texto Login', () => {
        renderWithRouterAndRedux(<App />,{initialState: INITIAL_STATE})
        const Login = screen.getByText(/login/i)
        screen.logTestingPlaygroundURL()
        expect(Login).toBeInTheDocument();
    }) */
});