import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiAction, thunkState } from '../redux/actions';

const alimentacao = 'Alimentação';
class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    };
  }

  componentDidMount() {
    const { valorMoeda } = this.props;
    valorMoeda();
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  onClickButto = () => {
    const { estados } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const estadosValue = { id, value, description, currency, method, tag };
    /* console.log(estadosValue); */
    estados(estadosValue);
    this.setState({ id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        WalletForm
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              name="value"
              value={ value }
              data-testid="value-input"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            <input
              id="description"
              name="description"
              value={ description }
              data-testid="description-input"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <select
            data-testid="currency-input"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >

            {currencies.map((curr) => <option key={ curr }>{curr}</option>)}
          </select>

          <select
            data-testid="method-input"
            value={ method }
            name="method"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select
            data-testid="tag-input"
            value={ tag }
            name="tag"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>

          </select>
        </form>
        <button
          type="button"
          onClick={ this.onClickButto }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  valorMoeda: (payload) => dispatch(getApiAction(payload)),
  estados: (payload) => dispatch(thunkState(payload)) });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  valorMoeda: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  estados: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
