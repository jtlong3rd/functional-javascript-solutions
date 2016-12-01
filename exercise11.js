module.exports = (arr, fn, context) => arr.reduce(
  (mapped, item, index) => [...mapped, fn.call(context, item, index, arr)],
  []
);
