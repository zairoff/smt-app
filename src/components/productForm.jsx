import React, { Component } from "react";
import Form from "..//common/form";

class Product extends Form {
  doSubmit(query) {
    console.log(query);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("product", "Product")}
          {this.renderButton("btn btn-primary", "Save")}
        </form>
      </div>
    );
  }
}

export default Product;
