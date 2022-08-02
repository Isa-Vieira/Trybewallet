import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { headerWallet, expenses } = this.props;
    return (
      <div>
        Header
        <header>
          <p data-testid="email-field">{ headerWallet }</p>
          <p data-testid="total-field">
            {
              expenses.reduce((acc, cur) => {
                const valueArmazenado = cur.value;
                const { currency } = cur;
                const { ask } = cur.exchangeRates[currency];
                const multiplica = valueArmazenado * ask;
                acc += multiplica;
                return Math.round(acc * 100) / 100;
              }, 0).toFixed(2)
            }

          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  headerWallet: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  headerWallet: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
