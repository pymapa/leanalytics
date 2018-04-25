const parser = require("./csvparser");

const assignmentsPath = "./data/assignments.csv";
const submissions1Path = "./data/submissions1.csv";
const submissions2Path = "./data/submissions2.csv";
const backgroundVariablesPath = './data/backgroundVariables.csv';

let assignmentsJson = {};
let submissions1Json = {};
let submissions2Json = {};
let backgroundVariablesJson = {};


parseFiles()

async function parseFiles() {
  console.log('Starting CSV parsing...');
  await Promise.all([
    assignmentsJson = parser.parseCsvToJson(assignmentsPath),
    submissions1Json = parser.parseCsvToJson(submissions1Path),
    submissions2Json = parser.parseCsvToJson(submissions2Path),
    backgroundVariablesJson = parser.parseCsvToJson(backgroundVariablesPath)
  ])
}
