

exports.calculateData = dataObj => {
  return submissions;
}


exports.createDataObj = (submissions1, submissions2, assignments, backgroundVariables) => {
  let obj = {};
  obj.submissions = submissions1.concat(submissions2);
  obj.assignments = assignments;
  obj.backgroundVariables = backgroundVariables;
  return obj;
}
