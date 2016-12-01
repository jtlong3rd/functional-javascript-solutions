const repeat = (operation, num) => {
  if (num === 0) {
    return;
  }

  operation();

  // N.B.: the superficial "return" serves to
  // make the recursive call a tail one
  return repeat(operation, num - 1);
};

module.exports = repeat;
