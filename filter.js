const condition = row => {
  return (
    true
  );
  // Implement filtering conditions here
};

exports.filterSubmissions = json => {
  const filtered = json.filter(condition);
  return filtered;
};
