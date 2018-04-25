const csv = require("csvtojson");

exports.parseCsvToJson = pathToFile => {
  let json;
  console.log('Parsing ' + pathToFile);
  return new Promise((resolve, reject) => {
    csv()
    .fromFile(pathToFile)
    .on("json", jsonObj => {
      json = jsonObj;
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      // console.log(json);
    })
    .on("done", error => {
      console.log(pathToFile + " parsed.");
      if (error) {
        console.log(error);
      } else {
        resolve(json);
      }
    });
  })
  await 
};
