const curryN = (fn, n = fn.length, ...curriedArgs) => n === 0
  ? fn(...curriedArgs)
  : nextArg => curryN(fn, n - 1, ...curriedArgs, nextArg);

module.exports = curryN;
