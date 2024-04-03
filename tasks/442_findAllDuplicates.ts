const findAllDuplicates = (nums: number[]): number[] => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      res.push(index + 1);
    }
    nums[index] = -nums[index];
  }
  return res;
};
