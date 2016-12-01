const countWords = inputWords => inputWords.reduce(
  (counts, word) => Object.assign(counts, { [word]: (counts[word] || 0) + 1 }),
  {}
);

module.exports = countWords;
