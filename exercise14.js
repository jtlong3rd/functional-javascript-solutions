const repeat = (operation, num) => () => {
  if (num === 0) {
    return;
  }

  operation();
  return repeat(operation, num - 1);
};

const trampoline = bouncy => {
  while (bouncy) {
    bouncy = bouncy();
  }
};

module.exports = (operation, num) => trampoline(() => repeat(operation, num));
