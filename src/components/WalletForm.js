import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiAction } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    const { valorMoeda } = this.props;
    valorMoeda();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        WalletForm
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              name="value"
              data-testid="value-input"
              type="text"
            />
          </label>
          <label htmlFor="description">
            <input
              id="description"
              name="description"
              data-testid="description-input"
              type="text"
            />
          </label>
          <select data-testid="currency-input">
            {currencies.map((curr) => <option key={ curr }>{curr}</option>)}
          </select>

          <select data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>

          </select>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  valorMoeda: (payload) => dispatch(getApiAction(payload)) });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  valorMoeda: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
