import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
import Button from "../common/button";

class Form extends Component {
  state = {
    data: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit(this.Input.data);
  };

  renderButton(name, value) {
    return <Button name={name} value={value} />;
  }

  renderSelect(label, items) {
    const { data } = this.state;

    return <Select items={items} label={label} onChange={this.handleChange} />;
  }

  renderInput(name, label, type = "text") {
    const { data } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
