import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../styles/navigator.css'
import ListItem from './ListItem';
import List from './List'
import lists from '../utils/listValues'

class Navigator extends Component {
  render() {
      var cars = lists.Cars.map(function (element) {
        return <ListItem key={element.mark} value={element.mark}/>
      })

      var region = lists.Regions.map(function (element) {
        return <ListItem key={element.name} value={element.name}/>
      })

    return (
      <div className={`${this.props.baseClassName}`}>
        <h1 className={`${this.props.baseClassName}_header`}>{"Navigator Task"}</h1> 
        <section>
            <List header='Cars' items={ cars }/>
            <List header='Region' items={ region }/>
        </section>
        <footer className={`${this.props.baseClassName}_footer`}>{"Developed by Sofia Panova"}</footer>
      </div>
    )
  }
}

Navigator.propTypes = {
    items: PropTypes.array.isRequired,
    baseClassName: PropTypes.string
}

Navigator.defaultProps = {
    items: [],
    baseClassName: 'navigator'
}

export default Navigator
