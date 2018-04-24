const parser = require("./csvparser");

const assignmentsPath = "./data/assignments.csv";
const submissions1Path = "./data/submissions1.csv";
const submissions2Path = "./data/submissions2Path";
const backgroundVariablesPath = './data/backgroundVariables.csv';

let assignmentsJson = {};
let submissions1Json = {};
let submissions2Json = {};
let backgroundVariablesJson = {};

parseFiles(
  assignmentsPath,
  submissions1Path,
  submissions2Path,
  backgroundVariablesPath
)

async function parseFiles() {
  assignmentsJson = parser.parseCsvToJson(assignmentsPath);
  submissions1Json = parser.parseCsvToJson(submissions1Path);
  submissions2Json = parser.parseCsvToJson(submissions2Path);
  backgroundVariablesJson = parser.parseCsvToJson(backgroundVariablesPath)
}
