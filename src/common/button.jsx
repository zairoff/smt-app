import React, { Component } from "react";

const Button = ({ name, value }) => {
  return (
    <button type="submit" className={name}>
      {value}
    </button>
  );
};

export default Button;
