var groupAnagrams = function(str) {
  const newMap = new Map();
  for (str of str) {
    const key = str.split('').sort().join('');
    if (!newMap.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
}
