import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        hi, i'm {props.name}, my age {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
