const plotly = require("plotly")("pymapa", "fnc9hfrI617F3VkPg9ia");

exports.plot = dataObj => {
  console.log(dataObj.submissions[57]);
  let dataX = [];
  let dataY = [];
  dataObj.submissions.map(sub => {
    dataX.push(sub.assign_id);
    dataY.push(sub.score);
  })
  var data = [{ x: dataX, y: dataY, type: "scatter" }];
  var layout = { fileopt: "overwrite", filename: "simple-node-example" };

  plotly.plot(data, layout, function(err, msg) {
    if (err) return console.log(err);
    console.log(msg);
  });
};
