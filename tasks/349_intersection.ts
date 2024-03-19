const intersection = (nums1: number[], nums2: number[]): number[] => {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  return Array.from(new Set([...s1].filter((x) => s2.has(x))));
};
