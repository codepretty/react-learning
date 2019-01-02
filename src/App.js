import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andrew', age: 29 },
      { name: 'Jack', age: 8 },
      { name: 'Rich', age: 34 },
      { name: 'Brigette', age: 34 },
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name="Andrew" age="29" />
        <Person name="Rich" age="34" />
        <Person name="Jack" age="8" />
        <Person name="Brigette" age="34">I love Rich!</Person>
      </div>
    );
  }
}

export default App;
