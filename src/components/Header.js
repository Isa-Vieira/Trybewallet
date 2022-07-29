import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { headerWallet } = this.props;
    return (
      <div>
        Header
        <header>
          <p data-testid="email-field">{ headerWallet }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  headerWallet: state.user.email,
});

Header.propTypes = {
  headerWallet: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
