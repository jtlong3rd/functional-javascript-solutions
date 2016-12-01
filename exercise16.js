const getDependencies = (tree, name, version) => Object.keys(tree.dependencies || {}).reduce(
  (list, name) => [
    ...list,
    ...getDependencies(tree.dependencies[name], name, tree.dependencies[name].version)
  ],
  name !== undefined ? [`${name}@${version}`] : []
).filter(
  (entry, index, arr) => arr.indexOf(entry) === index
).sort();

module.exports = getDependencies;
