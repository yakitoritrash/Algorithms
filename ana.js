anaGram = function(s, t) {
  if (s.length !== t.length) return false;

  const obj = {};
  for (let c of s) {
    obj[c] = (obj[c] || 0) + 1;
  }
  for (c of t) {
    if (!obj[c]) return false;
    obj[c]--;
  }
  return true;
}
