const reduce = ([head, ...rest], fn, initial) => {
  if (head === undefined) {
    return initial;
  }

  return reduce(rest, fn, fn(initial, head));
};

module.exports = reduce;
