const Spy = (target, method) => {
  const spy = { count: 0 };
  const oldMethod = target[method];

  target[method] = function(...args) {
    spy.count++;
    return oldMethod.call(this, ...args);
  };

  return spy;
};

module.exports = Spy;
