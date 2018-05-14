import React, { Component } from "react";
import { Scatter } from "react-chartjs-2";

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
      console.log(submission.time_on_task)
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
    return submission.score / submission.time_on_task;
  }
  render() {
    const data1 = this.getData1();
    const data2 = this.getData2();
    const data3 = this.getData3();
    const data4 = this.getData4();
    const data5 = this.getData5();
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              suggestedMax: 120,
              stepSize: 5
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
