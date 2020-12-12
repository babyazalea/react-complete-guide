import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "taeyang", age: 30 },
      { name: "eunmin", age: 29 },
      { name: "mandoo", age: 100 },
    ],
  };

  switchNameHandler = () => {
    // console.log("Clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "ty"
    this.setState({
      persons: [
        { name: "ty", age: 30 },
        { name: "eunmin", age: 29 },
        { name: "mandoo", age: 100 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          my hobby is steaming my self
        </Person>
      </div>
    );
  }
}

export default App;
