const myEvery = (arr, callback) => {
  for (value of arr) {
    if (callback(value) == false)
      return false
  }
  return true
};

const sortUsersBy = (users, sortingCallback) => {
  return [...users].sort(sortingCallback);
};

const logEachName = (names) => {
  names.forEach((name, index, arr) => {
    console.log(name, index, arr)
  });
}
logEachName(['darlin', 'holguin', 'hello'])

const logEachUserBio = (users) => {
  return users.forEach(user => {
    console.log(user.bio);
  });
}

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
