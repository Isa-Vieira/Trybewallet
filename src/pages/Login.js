import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      buttonSenha: true,
    };
  }

  senha = (event) => {
    const { value } = event.target;
    const nummax = 6;
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const { email } = this.state;
    if (value.length >= nummax && re.test(email)) {
      this.setState({
        buttonSenha: false,
        name: value,
      });
    } else {
      this.setState({
        buttonSenha: true });
    }
  }

  emailValue = (event) => {
    const { value } = event.target;
    this.setState({ email: value });
  }

  clickButton = () => {
    const { email } = this.state;
    const { sendEmailStateGlobal } = this.props;
    sendEmailStateGlobal(email);
  }

  render() {
    const { buttonSenha, name } = this.state;
    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="Digite seu email"
              onChange={ this.emailValue }
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              id="password"
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="Digite sua senha"
              onChange={ this.senha }
            />
          </label>
          <Link to="/carteira">
            <button
              name={ name }
              type="button"
              onClick={ this.clickButton }
              disabled={ buttonSenha }
            >
              Entrar

            </button>
          </Link>

        </form>
      </div>

    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendEmailStateGlobal: (state) => dispatch(newAction(state)) });

Login.propTypes = {
  sendEmailStateGlobal: PropTypes.func.isRequired,

};

export default connect(null, mapDispatchToProps)(Login);
