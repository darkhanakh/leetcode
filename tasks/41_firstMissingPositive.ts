const firstMissingPositive = (nums: number[]): number => {
  nums.map((num, i) => (num < 0 ? (nums[i] = 0) : num));

  for (let i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i]);
    if (val >= 1 && val <= nums.length) {
      const idx = val - 1;
      if (nums[idx] > 0) {
        nums[idx] *= -1;
      } else if (nums[idx] == 0) {
        nums[idx] = (nums.length + 1) * -1;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
};
