const checkUsersValid = goodUsers => submittedUsers =>
  submittedUsers.every(
    ({ id: subId }) => goodUsers.some(({ id: goodId }) => subId === goodId)
  );

module.exports = checkUsersValid;
