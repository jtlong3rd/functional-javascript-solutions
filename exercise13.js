const repeat = (operation, num) => {
  if (num === 0) {
    return;
  }

  setTimeout(() => {
    operation();
    return repeat(operation, num - 1);
  }, 0);
};

module.exports = repeat;
