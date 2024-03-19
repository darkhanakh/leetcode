const isSubsequence = (s: string, t: string): boolean => {
  let first = 0;
  let second = 0;

  while (first < s.length && second < t.length) {
    if (s[first] === t[second]) {
      first++;
      second++;
    } else if (s[first] !== t[second]) {
      second++;
    }
    return first === s.length;
  }
};
