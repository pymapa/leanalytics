exports.calculateData = dataObj => {
  return submissions;
};

exports.createDataObj = (
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

exports.joinSubmissionAndSelfEvaluation = (
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

exports.divideBySelfEval = (dataObj) => {
  let result = {...dataObj};
  result.selfEval1 = [];
  result.selfEval2 = [];
  result.selfEval3 = [];
  result.selfEval4 = [];
  result.selfEval5 = [];
  dataObj.submission.forEach(submission => {
    switch(submission.self_eval) {
      case '1':
        result.selfEval1.push(submission);
        break;
      case '2':
        result.selfEval2.push(submission);
        break;
      case '3':
        result.selfEval3.push(submission);
        break;
      case '4':
        result.selfEval4.push(submission);
        break;
      case '5':
        result.selfEval5.push(submission);
        break;
      default:
        return;
    }
  })
  return result;
}
