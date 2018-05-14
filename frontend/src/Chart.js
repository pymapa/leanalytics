import React, { Component } from "react";
import { Scatter, defaults } from "react-chartjs-2";
defaults.global.animation = false;

let a = 0;
let b = 0;

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

  median(values){
    values.sort(function(a,b){
    return a-b;
  });

  if(values.length ===0) return 0

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];
  else
    return (values[half - 1] + values[half]) / 2.0;
}

  calculateRelativeScore(submission) {
    const score = submission.score / (submission.max_points * submission.time_on_task);
    return score;
  }
  reduceAvg = (sum, d) => {
    if(isNaN(d.y) || d.y == 'Infinity') {
      a++;
      return sum
    }
    b++;
    return sum + d.y
  }
  render() {
    const data1 = this.getData1();
    const avg1 = data1.reduce(this.reduceAvg, 0) / b
    a = 0;
    b = 0;
    const median1 = this.median(data1.map(d => d.y))
    console.log('Data 1', avg1, data1.length, median1)

    const data2 = this.getData2();
    const avg2 = data2.reduce(this.reduceAvg, 0) / b
    a = 0;
    b = 0;
    const median2 = this.median(data2.map(d => d.y))
    console.log('Data 2', avg2, data2.length, median2)

    const data3 = this.getData3();
    const avg3 = data3.reduce(this.reduceAvg, 0) / b
    a = 0;
    b = 0;
    const median3 = this.median(data3.map(d => d.y))
    console.log('Data 3', avg3, data3.length, median3)

    const data4 = this.getData4();
    const avg4 = data4.reduce(this.reduceAvg, 0) / b
    a = 0;
    b = 0;
    const median4 = this.median(data4.map(d => d.y))
    console.log('Data 4', avg4, data4.length, median4)

    const data5 = this.getData5();
    const avg5 = data5.reduce(this.reduceAvg, 0) / b
    a = 0;
    b = 0;
    const median5 = this.median(data5.map(d => d.y))
    console.log('Data 5', avg5, data5.length, median5)

    const medians = [{
      x: 30000,
      y: avg1
    }, {
      x: 30000,
      y: avg2
    }, {
      x: 30000,
      y: avg3
    }, {
      x: 30000,
      y: avg4
    }, {
      x: 30000,
      y: avg5
    }]

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
        },
        {
          label: "Medians",
          backgroundColor: "rgba(168, 107, 2551)",
          pointBorderColor: "rgba(168, 107, 255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 6,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(168, 107, 255,1)",
          pointHoverBorderColor: "rgba(168, 107, 255,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 6,
          pointHitRadius: 10,
          data: medians
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
