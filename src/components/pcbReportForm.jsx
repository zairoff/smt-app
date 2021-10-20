import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Select from "../common/select";
import ButtonBadge from "../common/buttonBadge";

class PcbReportForm extends Component {
  state = {
    data: [
      { id: "1", name: "TV" },
      { id: "2", name: "Air-conditioner" },
    ],
    items: [
      { id: "5b21ca3eeb7f6fbccd471818", name: "Detal teskari" },
      { id: "5b21ca3eeb7f6fbccd471814", name: "Detal yo'q" },
      { id: "5b21ca3eeb7f6fbccd471820", name: "Detal ko'tarilgan" },
    ],
    selectedListItem: null,
  };

  handleSelectChange = (name) => {
    console.log("aaa: ", name);
  };

  handleListChange = (item) => {
    this.setState({ selectedListItem: item });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row p-2">
          <div className="col">
            <Select
              name="Product"
              label="Product"
              items={this.state.data}
              onChange={this.handleSelectChange}
            />
          </div>
          <div className="col">
            <Select
              name="Brand"
              label="Brand"
              items={this.state.data}
              onChange={this.handleSelectChange}
            />
          </div>
          <div className="col">
            <Select
              name="Model"
              label="Model"
              items={this.state.data}
              onChange={this.handleSelectChange}
            />
          </div>
        </div>

        <div className="row p-2">
          <div className="col-4">
            <ListGroup
              items={this.state.items}
              selectedItem={this.state.selectedListItem}
              onItemSelect={this.handleListChange}
            ></ListGroup>
          </div>
          <div className="col">
            <ButtonBadge btnValue="1" badgeValue="21"/>
            <ButtonBadge btnValue="2" badgeValue="21"/>
            <ButtonBadge btnValue="3" badgeValue="21"/>
            <ButtonBadge btnValue="4" badgeValue="21"/>
            <ButtonBadge btnValue="5" badgeValue="21"/>
            <ButtonBadge btnValue="6" badgeValue="21"/>
            <ButtonBadge btnValue="7" badgeValue="21"/>
            <ButtonBadge btnValue="8" badgeValue="21"/>
            <ButtonBadge btnValue="9" badgeValue="21"/>
            <ButtonBadge btnValue="10" badgeValue="21"/>
            <ButtonBadge btnValue="11" badgeValue="21"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PcbReportForm;
