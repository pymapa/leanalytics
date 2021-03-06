const calculateData = dataObj => {
  return submissions;
};

const createDataObj = (
  submissions1,
  submissions2,
  assignments,
  backgroundVariables
) => {
  let obj = {};
  obj.submissions = submissions1.concat(submissions2);
  obj.assignments = assignments;
  obj.backgroundVariables = backgroundVariables;
  return obj;
};

const joinSubmissionAndSelfEvaluation = (
  submissions,
  backgroundVariables
) => {
  let joinedData = submissions.map(submission => {
    backgroundVariables.forEach(variable => {
      if(submission.user_id === variable.user_id) {
        submission.self_eval = variable.self_eval;
      }
    });
    return submission;
  });
  return joinedData;
};

const divideBySelfEval = (dataObj) => {
  let result = { };
  result.selfEval1 = [];
  result.selfEval2 = [];
  result.selfEval3 = [];
  result.selfEval4 = [];
  result.selfEval5 = [];
  result.medians = []
  dataObj.submissions.forEach(submission => {
    switch(submission.self_eval) {
      case 1:
        result.selfEval1.push(submission);
        break;
      case 2:
        result.selfEval2.push(submission);
        break;
      case 3:
        result.selfEval3.push(submission);
        break;
      case 4:
        result.selfEval4.push(submission);
        break;
      case 5:
        result.selfEval5.push(submission);
        break;
      default:
        return;
    }
  })
  return result;
}

module.exports = {
  calculateData,
  createDataObj,
  joinSubmissionAndSelfEvaluation,
  divideBySelfEval
}