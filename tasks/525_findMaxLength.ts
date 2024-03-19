function findMaxLength(nums: number[]): number {
  let z = 0;
  let o = 0;
  let res = 0;
  const diffIndex = new Map();

  nums.forEach((n, i) => {
    if (n == 0) z++;
    else o++;

    if (!diffIndex.has(o - z)) diffIndex.set(o - z, i);

    if (z == o) res = o + z;
    else {
      let idx = diffIndex.get(o - z);
      res = Math.max(res, i - idx);
    }
  });
  return res;
}
