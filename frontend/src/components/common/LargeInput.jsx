import React from "react";

const LargeInput = ({
  name,
  label,
  error,
  placeholder,
  col,
  rows,
  ...rest
}) => {
  return (
    <div className="largeInput">
      <label className="largeInputLabel" htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className="largeInputCont"
        id={name}
        {...rest}
        cols={col}
        rows={rows}
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default LargeInput;
