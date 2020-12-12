import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "taeyang", age: 30 },
      { name: "eunmin", age: 29 },
      { name: "mandoo", age: 100 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  const switchNameHandler = () => {
    // console.log("Clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "ty"
    setPersonsState({
      persons: [
        { name: "ty", age: 30 },
        { name: "eunmin", age: 29 },
        { name: "mandoo", age: 100 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, im a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        my hobby is steaming my self
      </Person>
    </div>
  );
};

export default app;
