const csv = require("csvtojson");

exports.parseCsvToJson = async (pathToFile) => {
  let json;
  await csv()
    .fromFile(pathToFile)
    .on("json", jsonObj => {
      json = jsonObj;
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
    })
    .on("done", error => {
      console.log("end");
      console.log(error);
    });
}
