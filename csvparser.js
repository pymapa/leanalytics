const csv = require("csvtojson");

exports.parseCsvToJson = pathToFile => {
  let json = [];
  console.log('Parsing ' + pathToFile);
  return new Promise((resolve, reject) => {
    csv()
    .fromFile(pathToFile)
    .on("json", jsonObj => {
      json.push(jsonObj);
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
