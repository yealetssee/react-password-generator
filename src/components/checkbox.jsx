import React from "react";

const Checkbox = (props) => {
  return (
    <label htmlFor={props.for}>
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.text}
    </label>
  );
};

export default Checkbox;
