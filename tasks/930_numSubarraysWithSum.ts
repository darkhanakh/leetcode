const numSubarraysWithSum = (nums: number[], goal: number): number => {
  const helper = (x: number): number => {
    if (x < 0) return 0;
    let res = 0;
    let l = 0;
    let curr = 0;

    for (let r = 0; r < nums.length; r++) {
      curr += nums[r];

      while (curr > x) {
        curr -= nums[l];
        l++;
      }
      res += r - l + 1;
    }
    return res;
  };

  return helper(goal) - helper(goal - 1);
};
