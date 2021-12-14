import React from "react";
import Form from "../common/form";

class Model extends Form {
  state = {
    products: [],
    brands: [],
  };

  async componentDidMount() {
    //this.state.data.this.setState({ products, positions, defects });
  }

  render() {
    const { products, brands } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("Product", products)}
          {this.renderSelect("Brand", brands)}
          {this.renderInput("brand", "Brand")}
          {this.renderButton("btn btn-primary", "Save")}
        </form>
      </div>
    );
  }
}

export default Model;
