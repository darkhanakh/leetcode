const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const answer: number[][] = [[], []];
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  for (const num of s1) {
    if (!s2.has(num)) {
      answer[0].push(num);
    }
  }

  for (const num of s2) {
    if (!s1.has(num)) {
      answer[1].push(num);
    }
  }

  return answer;
};
