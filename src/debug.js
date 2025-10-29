const myEvery = (arr, callback) => {
  for (value of arr) {
    if (callback(value) == false)
      return false
  }
  return true
};

const sortUsersBy = (users, sortingCallback) => {
  return [...users].sort(sortingCallback());
};

const logEachName = (names) => {
  return names.forEach(console.log());
};

const logEachUserBio = (users) => {
  return users.forEach(console.log(users.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
