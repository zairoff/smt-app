import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Select from "../common/select";
import ButtonBadge from "../common/buttonBadge";
import httpService from "../services/httpService";
import { apiUrl } from "../config.json"
import { getProducts } from "../services/productService";
import { getPositions } from "../services/positionService";
import { getDefects } from "../services/defectService";

class PcbReportForm extends Component {
  state = {
    positions: [],
    products: [],
    brands: [],
    models: [],
    reports: [],
    defects: [],
    selectedProduct: null,
    selectedBrand: null,
    selectedModel: null,
    selectedListItem: null,
  };

  async componentDidMount() {
    const { data: products } = await getProducts();
    const { data: positions } = await getPositions();
    const { data: defects } = await getDefects();
    this.setState({ products, positions, defects });
  }

  handleAdd = async (positionId) => {
    const { selectedModel, selectedListItem } = this.state;

    if (!selectedListItem || !selectedModel) {
      alert("Iltimos, model va nuqson turini tanlang!");
      return;
    }

    const obj = {
      modelId: selectedModel,
      defectId: selectedListItem.id,
      pcbPositionId: positionId,
    };
    const { status: status } = await httpService.post(apiUrl + "/PcbReport", obj);
    if (status === 201) {
      const { data } = await httpService.get(
        apiUrl +
        "/PcbReport/GetByDateAndModelIdAsync?modelId=" +
        this.state.selectedModel +
        "&date=" +
        new Date().toJSON().slice(0, 10).replace(/-/g, "-")
      );
      this.state.reports = data;
      this.setState(this.state.reports);
    }
  };

  handleSelectChange = async (target) => {
    let data = null;
    switch (target.name) {
      case "Product":
        this.state.selectedProduct = target.value;
        this.state.selectedBrand = null;
        this.state.selectedModel = null;
        this.state.brands = [];
        this.state.models = [];
        this.state.reports = [];

        if (target.value) {
          ({ data } = await httpService.get(
            apiUrl + "/ProductBrand/GetByProductIdAsync?productId=" +
            this.state.selectedProduct
          ));
          this.state.brands = data;
        }
        this.setState(this.state.brands);
        break;
      case "Brand":
        this.state.selectedBrand = target.value;
        this.state.selectedModel = null;
        this.state.models = [];
        this.state.reports = [];
        if (target.value) {
          ({ data } = await httpService.get(
            apiUrl +
            "/Model/GetByProductBrandId?productBrandId=" +
            this.state.selectedBrand
          ));
          this.state.models = data;
        }

        this.setState(this.state.models);
        break;
      case "Model":
        this.state.selectedModel = target.value;
        this.state.reports = [];
        if (target.value) {
          ({ data } = await httpService.get(
            apiUrl +
            "/PcbReport/GetByDateAndModelIdAsync?modelId=" +
            this.state.selectedModel +
            "&date=" +
            new Date().toJSON().slice(0, 10).replace(/-/g, "-")
          ));
          this.state.reports = data;
        }
        this.setState(this.state.reports);
        break;
      default:
        console.log(`Sorry, we are out of`);
    }
  };

  handleListChange = (item) => {
    this.setState({ selectedListItem: item });
  };

  render() {
    const { products, brands, models, defects, positions, reports } =
      this.state;
    return (
      <React.Fragment>
        <div className="row p-2">
          <div className="col">
            <Select
              name="Product"
              label="Product"
              items={products}
              onChange={this.handleSelectChange}
            />
          </div>
          <div className="col">
            <Select
              name="Brand"
              label="Brand"
              items={brands}
              onChange={this.handleSelectChange}
            />
          </div>
          <div className="col">
            <Select
              name="Model"
              label="Model"
              items={models}
              onChange={this.handleSelectChange}
            />
          </div>
        </div>

        <div className="row p-2">
          <div className="col-4">
            <ListGroup
              items={defects}
              reports={reports}
              selectedItem={this.state.selectedListItem}
              onItemSelect={this.handleListChange}
            ></ListGroup>
          </div>
          <div className="col">
            {positions.map((position) => (
              <ButtonBadge
                onClick={this.handleAdd}
                key={position.id}
                btnValue={position.position}
                btnId={position.id}
                reports={reports}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PcbReportForm;
