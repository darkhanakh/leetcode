const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  const s: number[] = [];
  const map = new Map<number, number>();
  const res: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    while (s.length > 0 && s[s.length - 1] < nums2[i]) {
      const v = s.pop()!;

      map.set(v, nums2[i]);
    }
    s.push(nums2[i]);
  }

  while (s.length > 0) {
    const v = s.pop()!;

    map.set(v, -1);
  }

  for (let i = 0; i < nums1.length; i++) {
    res.push(map.get(nums1[i])!);
  }

  return res;
};
