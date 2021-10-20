import React, { Component } from "react";
import "../css/btn.css";

const Button = (name, value) => {
  return (
    <button type="button" className={name}>
      {value}
    </button>
  );
};

export default Button;