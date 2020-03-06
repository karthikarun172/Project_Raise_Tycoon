import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./inputs";
import SelectData from "./Select_ip";
import LargeInput from "./LargeInput";
import SmallInput from "./SmallInput";
import BitInput from "./bidInput";
import BidLargeIp from "./bidLargeip";

class FormProperties extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label, className) {
    return (
      <button disabled={this.validate()} className={className}>
        {label}
      </button>
    );
  }

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <SelectData
        name={name}
        label={label}
        value={data[name]}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderLargeInput(name, label, col, rows, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <LargeInput
        type={type}
        name={name}
        type={type}
        value={data[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
        rows={rows}
        col={col}
      />
    );
  }

  renderLargeInput1(name, label, col, rows, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <BidLargeIp
        type={type}
        name={name}
        type={type}
        value={data[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
        rows={rows}
        col={col}
      />
    );
  }
  renderSmallInput(name, label, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <SmallInput
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
        label={label}
      />
    );
  }

  renderInput1(name, label, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <BitInput
        type={type}
        name={name}
        onChange={this.handleChange}
        value={data[name]}
        placeholder={placeholder}
        label={label}
        error={errors[name]}
      />
    );
  }
  renderInput(name, label, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        onChange={this.handleChange}
        value={data[name]}
        placeholder={placeholder}
        label={label}
        error={errors[name]}
      />
    );
  }
}

export default FormProperties;
