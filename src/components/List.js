import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/list.css'

class List extends Component {

    render() {
      return (<div className={this.props.baseClassName}>
                <header className={`${this.props.baseClassName}_header`}> {this.props.header} </header>
                <ul className={`${this.props.baseClassName}_list`}>
                  {this.props.items}
                </ul>
              </div>)
    }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  baseClassName: PropTypes.string
}

List.defaultProps = {
  items: [],
  baseClassName: 'list'
}

export default List