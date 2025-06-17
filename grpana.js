grpAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
    const key = str.split('').split().join('');
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(str);
  }
  return Array.from(map.values());
}
