import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      TeamMembers: this.props.TeamMembers,
      expanded: -1
    }
  }

  updateState = (id) => {
    this.setState({expanded:id})
  }

  render() {
    return (
      <div className="App">
        <Body TeamMembers={this.state.TeamMembers} expanded={this.state.expanded} updateState={this.updateState}/>
      </div>
    );
  }
}

export default App;
