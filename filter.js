const condition = row => {
  return (
    row.time_on_task !== '0'
    // true
  );
  // Implement filtering conditions here
};

exports.filterSubmissions = dataObj => {
  const filteredSubmissions = dataObj.submissions.filter(condition);
  console.log(filteredSubmissions.length)
  return filteredSubmissions;
};
