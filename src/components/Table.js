import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expensesTable } = this.props;
    return (
      <div>
        Table
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expensesTable.map((param) => (
              <tr key={ param.id }>
                <td>{ param.description}</td>
                <td>{ param.tag }</td>
                <td>{ param.method }</td>
                <td>{(Number(param.value)).toFixed(2) }</td>
                <td>{ param.currency }</td>
                <td>{(Number(param.exchangeRates[param.currency].ask)).toFixed(2) }</td>
                <td>
                  {(Number(param.exchangeRates[param.currency]
                    .ask * (Number(param.value)))).toFixed(2)}
                </td>
                <td>{param.exchangeRates[param.currency].name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expensesTable: state.wallet.expenses,
});

/* const mapDispatchToProps = (dispatch) => {

}; */

Table.propTypes = {
  expensesTable: PropTypes.array.isRequired,
}.isRequired;

export default connect(mapStateToProps)(Table);
