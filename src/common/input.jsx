import React from "react";

const Input = ({ name, label, type, value }) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} className="form-control" />
    </div>
  );
};

export default Input;
