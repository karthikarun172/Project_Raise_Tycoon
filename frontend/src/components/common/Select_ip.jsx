import React from "react";

const SelectData = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="SelectInputLabel" htmlFor={name}>
        {label}
      </label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="">Choose an Option</option>
        {options.map(option => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectData;
