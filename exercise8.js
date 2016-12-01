const duckCount = (...args) => args.reduce(
  (count, arg) => ({}).hasOwnProperty.call(arg, 'quack') ? count + 1 : count,
  0
);

module.exports = duckCount;
