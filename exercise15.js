const loadUsers = (userIds, load, done) => Promise.all(
  userIds.map(id => new Promise(resolve => load(id, resolve)))
).then(done);

module.exports = loadUsers;
