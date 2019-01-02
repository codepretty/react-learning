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

  switchNameHandler = (newName) => {
    console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Jack', age: 8 },
        { name: 'Rich', age: 34 },
        { name: 'Brigette', age: 34 },
      ]
    });
  }
  
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Andrew', age: 29 },
        { name: event.target.value, age: 8 },
        { name: 'Rich', age: 34 },
        { name: 'Brigette', age: 34 },
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('hello')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Drew')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={() => { return this.switchNameHandler('TEST!')} }
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>The love of my life!</Person>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
