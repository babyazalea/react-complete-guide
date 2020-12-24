import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timer = setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    // below return thing is triggered when component render & mount
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work 2nd in useEffect");
    };
  });

  // useEffect hook can use second arg for when excute method in useEffect().
  // if second arg is empty array, that must be excute first time and just once when app rendering.

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      {/*
      below onClick way can be ineffeciant, because react-rerender problem.
      So, we can use .bind way where below than this way.
      */}
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
