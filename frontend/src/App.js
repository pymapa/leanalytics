import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {submissions: []}
    }
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
    fetch('/api/data')
    .then(result => {
      result.json()
      .then(json => {
        console.log('data loaded');
        this.setState({data: json.data});
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Chart data={this.state.data} />
      </div>
    );
  }
}

export default App;
