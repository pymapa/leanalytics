import React, { Component } from "react";
import { Scatter, defaults } from "react-chartjs-2";
defaults.global.animation = false;

const calculateMedian = (values) => {
  values.sort((a, b) => a - b);

  if(values.length === 0) return 0

  var half = Math.floor(values.length / 2);

  if(values.length % 2)
    return values[half];
  else
    return (values[half - 1] + values[half]) / 2.0;
}

const calculateMode = arr =>
  arr.reduce((current, item) => {
    if(item === 0) {
      return current
    }
    let val = current.numMapping[item] = (current.numMapping[item] || 0) + 1;
    if(val > current.greatestFreq) {
      current.greatestFreq = val;
      current.mode = item;
    }
    return current;
  }, { mode: null, greatestFreq: -Infinity, numMapping: {} }, arr).mode;


class Chart extends Component {
  getData1() {
    return this.props.data.selfEval1.map(submission => {
      return {
        x: submission.assign_id,
        y: this.calculateRelativeScore(submission)
      };
    });
  }
  getData2() {
    return this.props.data.selfEval2.map(submission => {
      return {
        x: submission.assign_id,
        y: this.calculateRelativeScore(submission)
      };
    });
  }
  getData3() {
    return this.props.data.selfEval3.map(submission => {
      return {
        x: submission.assign_id,
        y: this.calculateRelativeScore(submission)
      };
    });
  }
  getData4() {
    return this.props.data.selfEval4.map(submission => {
      return {
        x: submission.assign_id,
        y: this.calculateRelativeScore(submission)
      };
    });
  }
  getData5() {
    return this.props.data.selfEval5.map(submission => {
      return {
        x: submission.assign_id,
        y: this.calculateRelativeScore(submission)
      };
    });
  }

  calculateRelativeScore(submission) {
    const score = submission.score / (submission.max_points * submission.time_on_task);
    return score;
  }

  calculateResults = data => {
    let invalid = 0
    const reduceAvg = (sum, d) => {
      if(isNaN(d.y) || !isFinite(d.y)) {
        invalid++;
        return sum
      }
      return sum + d.y
    }
    const arr = data.map(d => d.y)
    const sum = data.reduce(reduceAvg, 0)
    const avg = sum / data.length
    const median = calculateMedian(arr)
    const mode = calculateMode(arr)
    return {
      length: data.length,
      sum,
      invalid,
      avg,
      median,
      mode
    }
  }
  render() {
    const data1 = this.getData1();
    console.log('Data 1', this.calculateResults(data1))

    const data2 = this.getData2();
    console.log('Data 2', this.calculateResults(data2))

    const data3 = this.getData3();
    console.log('Data 3', this.calculateResults(data3))

    const data4 = this.getData4();
    console.log('Data 4', this.calculateResults(data4))

    const data5 = this.getData5();
    console.log('Data 5', this.calculateResults(data5))

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              suggestedMax: 0.05,
              stepSize: 0.01
            }
          }
        ]
      }
    };
    const chartData = {
      labels: ["Scatter"],
      datasets: [
        {
          label: "Self eval 1",
          backgroundColor: "rgba(65, 173, 53,1)",
          pointBorderColor: "rgba(65, 173, 53,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(65, 173, 53,1)",
          pointHoverBorderColor: "rgba(65, 173, 530,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: data1
        },
        {
          label: "Self eval 2",
          backgroundColor: "rgba(37,19,19,1)",
          pointBorderColor: "rgba(37,19,19,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(37,19,19,1)",
          pointHoverBorderColor: "rgba(37,19,19,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: data2
        },
        {
          label: "Self eval 3",
          backgroundColor: "rgba(65, 244, 235,1)",
          pointBorderColor: "rgba(65, 244, 235,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(65, 244, 235,1)",
          pointHoverBorderColor: "rgba(65, 244, 235,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: data3
        },
        {
          label: "Self eval 4",
          backgroundColor: "rgba(244, 72, 66,1)",
          pointBorderColor: "rgba(244, 72, 66,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(244, 72, 66,1)",
          pointHoverBorderColor: "rgba(244, 72, 66,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: data4
        },
        {
          label: "Self eval 5",
          backgroundColor: "rgba(168, 107, 2551)",
          pointBorderColor: "rgba(168, 107, 255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(168, 107, 255,1)",
          pointHoverBorderColor: "rgba(168, 107, 255,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: data5
        }
      ]
    };
    return (
      <div>
        <Scatter data={chartData} options={options} />
      </div>
    );
  }
}

export default Chart;
