const condition = row => {
  return (
    true
  );
  // Implement filtering conditions here
};

exports.filterSubmissions = dataObj => {
  const filteredSubmissions = dataObj.submissions.filter(condition);
  return filteredSubmissions;
};
