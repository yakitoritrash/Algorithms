var topKFreq = function (nums, k) {
  const freqMap = new Map();
  const buckets = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    buckets[freq] = (buckets[freq] || new Set()).add(nums);
  }

  for (let i = buckets.length-1; i >= 0; i--) {
    if (buckets[i]) {
      result.push(...buckets[i]);
    }
    if (result.length === k) break;
  }
  return result;
}
