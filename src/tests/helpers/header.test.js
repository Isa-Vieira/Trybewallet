import { renderWithRouterAndRedux } from '../helpers/renderWith';
import React from 'react';
import { screen } from '@testing-library/react';
import Header from '../../components/Header';


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

     
    describe('Testa o Header', () => {
     it('Testa se existe o texto hello, trybewallet', () => {
         renderWithRouterAndRedux(<Header />, {INITIAL_STATE: INITIAL_STATE})
         const number = screen.getByText(/0\.00/i)
         expect(number).toBeInTheDocument();
     })
     it('Testa se existe o texto BRL', () => {
         renderWithRouterAndRedux(<Header />)
         const textBRL = screen.getByText(/brl/i)
         expect(textBRL).toBeInTheDocument();
        });
        it('Teste se o e-mail está correto', async () => {
          renderWithRouterAndRedux(<Header />,{initialState: INITIAL_STATE})
          const email = await screen.findByTestId(/email-field/i)
          expect(email).toBeInTheDocument();
          expect(email).toHaveTextContent('trybewallet@project.com')
          /* screen.logTestingPlaygroundURL() */
        })
     })