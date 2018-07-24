import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'material-icons/iconfont/material-icons.scss';

class Error extends Component {
  render() {
    return (
      <div className={this.props.baseClassName}>
        <header className={`${this.props.baseClassName}_header`}>
          {this.props.error}
        </header>
        <i class="material-icons"> error </i>
      </div>
    );
  }
}

Error.propTypes = {
    error: PropTypes.string.isRequired,
    baseClassName: PropTypes.string
}

Error.defaultProps = {
    error: 'Not Found',
    baseClassName: 'error'
}

export default Error
