import React from "react";

const BitInput = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className="BidIpCont">
      <label className="BidinputLabel" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={placeholder}
        className="BidInput"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default BitInput;
