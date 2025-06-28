var topFreqK = function(nums, k) {
  const freqmap = new Map();
  const buckets = [];
  const result = [];

  for (let num of nums) {
    freqmap.set(num, (freqmap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqmap) {
    buckets[freq] = (buckets[freq] || new Set()).add(num);
  }

  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i]) {
      result.push(...buckets[i]);
    }
    if (result.length === k) {
      break;
    }
    return result;
  }
}
