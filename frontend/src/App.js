import React, { Component } from "react";
import "./App.css";
import Chart from "./Chart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        submissions: [],
        selfEval1: [],
        selfEval2: [],
        selfEval3: [],
        selfEval4: [],
        selfEval5: []
      },
      dataLoaded: false
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("/api/data")
      .then(result => {
        result.json().then(json => {
          console.log("data loaded");
          this.setState({ data: json.data });
          this.setState({ dataLoaded: true });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if(this.state.dataLoaded) {
      return <Chart data={this.state.data} />;
    }
    return (
      <h1>Loading...</h1>
    )

  }
}

export default App;
