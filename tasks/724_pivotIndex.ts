const pivotIndex = (nums: number[]): number => {
  const psum = [];
  psum.push(0);

  for (let i = 0; i < nums.length; i++) {
    psum.push(psum[i] + nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (psum[i] === psum[nums.length] - psum[i + 1]) {
      return i;
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
