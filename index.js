const express = require("express");
const app = express();

const router = express.Router();
const dbHelper = require('./db')

router.get("/data", async (req, res) => {
  const db = dbHelper.getDatabase()
  dbHelper.fetchCombinedStudentData(db)
    .then(rows => {
      console.log(rows.length)
      res.json({ data: rows });
    })
    .catch(reason => {
      console.error(reason)
    })
    .then(() => dbHelper.closeDatabase(db))

});

app.use("/api", router);

app.listen(3001);

const parser = require("./csvparser");
const filter = require("./filter");
const controller = require("./controller");
const plotter = require("./plotter");

const assignmentsPath = "./data/assignments.csv";
const submissions1Path = "./data/submissions1.csv";
const submissions2Path = "./data/submissions2.csv";
const backgroundVariablesPath = "./data/backgroundVariables.csv";

let assignmentsJson = [];
let submissions1Json = [];
let submissions2Json = [];
let backgroundVariablesJson = [];

async function execute() {
  console.log("starting program execution");
  await parseFiles();
  console.log("parsing completed");
  const dataObj = controller.createDataObj(
    submissions1Json,
    submissions2Json,
    assignmentsJson,
    backgroundVariablesJson
  );
  // console.log(console.log(submissions1Json));
  const filteredObj = filterSubmissions(dataObj);
  let handledObj = runController(filteredObj);
  console.log(handledObj.selfEval1[5]);
  console.log(handledObj.selfEval3[5]);
  // plotter.plot(dataObj);
  return handledObj;
}

async function parseFiles() {
  // console.log("Starting CSV parsing...");
  // await Promise.all([
  assignmentsJson = await parser.parseCsvToJson(assignmentsPath);
  submissions1Json = await parser.parseCsvToJson(submissions1Path);
  submissions2Json = await parser.parseCsvToJson(submissions2Path);
  backgroundVariablesJson = await parser.parseCsvToJson(
    backgroundVariablesPath
  );
  // ]);
}

const filterSubmissions = dataObj => {
  return { ...dataObj, submissions: filter.filterSubmissions(dataObj) };
};

const runController = filteredObj => {
  let handledObj = { ...filteredObj };
  // submissions1Json = controller.calculateData(submissions1Json);
  // handledObj.submissions = controller.joinSubmissionAndSelfEvaluation(
  //   filteredObj.submissions,
  //   filteredObj.backgroundVariables
  // );
  const divided = controller.divideBySelfEval(handledObj);
  return divided;
};

// execute();

