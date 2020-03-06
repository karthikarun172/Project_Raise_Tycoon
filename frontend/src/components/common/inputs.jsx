import React from "react";

const Input = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className="inputCont">
      <label className="inputLabel" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={placeholder}
        className="Input"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
