const getShortMessages = messages => messages
  .filter(({ message: { length } }) => length < 50)
  .map(({ message }) => message);


module.exports = getShortMessages;
