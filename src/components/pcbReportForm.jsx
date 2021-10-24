import React, { Component } from "react";
import { Alert } from "react-alert";
import ListGroup from "../common/listGroup";
import Select from "../common/select";
import ButtonBadge from "../common/buttonBadge";
import axios from "axios";

const apiProduct = "https://localhost:44353/api/Product";
const apiBrand = "https://localhost:44353/api/ProductBrand";
const apiModel = "https://localhost:44353/api/Model/";
const apiPosition = "https://localhost:44353/api/PcbPosition";
const apiDefects = "https://localhost:44353/api/Defect";
const apiReport = "https://localhost:44353/api/PcbReport";

//axios.defaults.headers.post["Content-Type"] = "application/json";

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

  callApi = async (url) => {
    const { data } = await axios.get(url);
    return data;
  };

  async componentDidMount() {
    //console.log("starting timer...", new Date().toJSON().slice(0,10).replace(/-/g,'-'));
    const { data: products } = await axios.get(apiProduct);
    const { data: positions } = await axios.get(apiPosition);
    const { data: defects } = await axios.get(apiDefects);
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
    const { status: status } = await axios.post(apiReport, obj);
    if (status === 201) {
      this.state.reports = await this.callApi(
        apiReport +
          "/GetByDateAndModelIdAsync?modelId=" +
          this.state.selectedModel +
          "&date=" +
          new Date().toJSON().slice(0, 10).replace(/-/g, "-")
      );
      this.setState(this.state.reports);
    }
  };

  handleSelectChange = async (target) => {
    switch (target.name) {
      case "Product":
        this.state.selectedProduct = target.value;
        this.state.selectedBrand = null;
        this.state.selectedModel = null;
        this.state.brands = [];
        this.state.models = [];
        this.state.reports = [];
        if (target.value) {
          this.state.brands = await this.callApi(
            apiBrand +
              "/GetByProductIdAsync?productId=" +
              this.state.selectedProduct
          );
        }
        this.setState(this.state.brands);
        break;
      case "Brand":
        this.state.selectedBrand = target.value;
        this.state.selectedModel = null;
        this.state.models = [];
        this.state.reports = [];
        if (target.value) {
          this.state.models = await this.callApi(
            apiModel +
              "GetByProductBrandId?productBrandId=" +
              this.state.selectedBrand
          );
        }
        this.setState(this.state.models);
        break;
      case "Model":
        this.state.selectedModel = target.value;
        this.state.reports = [];
        if (target.value) {
          this.state.reports = await this.callApi(
            apiReport +
              "/GetByDateAndModelIdAsync?modelId=" +
              this.state.selectedModel +
              "&date=" +
              new Date().toJSON().slice(0, 10).replace(/-/g, "-")
          );
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
