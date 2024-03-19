const _minimumLength = (s: string): number => {
  let l = 0;
  let r = s.length - 1;

  while (l < r && s[l] == s[r]) {
    let tmp = s[l];
    while (l <= r && tmp == s[l]) {
      l++;
    }
    while (l <= r && tmp == s[r]) {
      r--;
    }
  }
  return r + l - 1;
};
