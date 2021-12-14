import React from "react";
import Form from "../common/form";

class Brand extends Form {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("brand", "Brand")}
          {this.renderButton("btn btn-primary", "Save")}
        </form>
      </div>
    );
  }
}

export default Brand;
