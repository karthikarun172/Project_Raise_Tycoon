import React from "react";

const BidLargeIp = ({
  name,
  label,
  error,
  placeholder,
  col,
  rows,
  ...rest
}) => {
  return (
    <div className="BidlargeInput">
      <label className="BidlargeInputLabel" htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className="BidlargeInputCont"
        id={name}
        {...rest}
        cols={col}
        rows={rows}
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default BidLargeIp;
