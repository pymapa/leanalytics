const parser = require("./csvparser");
const filter = require("./filter");
const controller = require("./controller");
const plotter = require('./plotter');

const assignmentsPath = "./data/assignments.csv";
const submissions1Path = "./data/submissions1.csv";
const submissions2Path = "./data/submissions2.csv";
const backgroundVariablesPath = "./data/backgroundVariables.csv";

let assignmentsJson = [];
let submissions1Json = [];
let submissions2Json = [];
let backgroundVariablesJson = [];

execute();

async function execute() {
  console.log("starting program execution");
  await parseFiles();
  console.log("parsing completed");
  // console.log(console.log(submissions1Json));
  // filterSubmissions(submissions1Json);
  // runController();
  const dataObj = controller.createDataObj(submissions1Json, submissions2Json, assignmentsJson, backgroundVariablesJson);
  plotter.plot(dataObj);
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

const filterSubmissions = async () => {
  await Promise.all([filter.filterSubmissions(submissions1Json)]);
};

const runController = () => {
  submissions1Json = controller.calculateData(submissions1Json);
};
