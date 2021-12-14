import "./App.css";
import PcbReportForm from "./components/pcbReportForm";
import { Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./components/navBar";
import Product from "./components/productForm";
import Brand from "./components/brandForm";
import Model from "./components/modelForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/product" component={Product} />
          <Route path="/brand" component={Brand} />
          <Route path="/model" component={Model} />
          <Route path="/pcbreport" component={PcbReportForm} />
          <Route path="/not-found" component={PcbReportForm} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
