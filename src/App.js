import "./App.css";
import PcbReportForm from "./components/pcbReportForm";
import React, { Component } from 'react';


function App() {
  return (
    <React.Fragment>
      <main className="container">
        <PcbReportForm />
      </main>
    </React.Fragment>
  );
}

export default App;