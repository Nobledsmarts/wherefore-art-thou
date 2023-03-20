function whatIsInAName(collection, source) {
  const hasMatch = (collection, source) => Object.keys(source)
  .every(key => Object.keys(collection).includes(key) && source[key] == collection[key]);

  return collection.filter(item => hasMatch(item, source));
}
