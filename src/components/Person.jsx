import React from "react";

const Person = ({ name, age }) => {
  const personStyle = {
    color: "blue",
    border: "1px solid black",
    padding: "10px",
    display: "inline-block",
    borderRadius: "5px",
  };

  return (
    <div style={personStyle}>
      {name} is {age} years old.
    </div>
  );
};

export default Person;
