import React from "react";

const SmallInput = ({ name, label, error, ...rest }) => {
  return (
    <div className="smallInput">
      <label className="smallInputLabel" htmlFor={name}>
        {label}
      </label>
      <input {...rest} name={name} id={name} className="smallInputBox" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SmallInput;
