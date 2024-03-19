const getFirstCommon = (nums1: number[], nums2: number[]): number => {
  const nums2Set = new Set(nums2);
  for (let num of nums1) {
    if (nums2Set.has(num)) {
      return num;
    }
  }
  return -1;
};
