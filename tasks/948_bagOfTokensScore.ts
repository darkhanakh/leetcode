const bagOfTokensScore = (tokens: number[], power: number): number => {
  let score;
  let res = (score = 0);
  tokens.sort((a, b) => a - b);

  let l = 0;
  let r = tokens.length - 1;
  while (l <= r) {
    if (power >= tokens[l]) {
      power -= tokens[l];
      score++;
      l++;
      res = Math.max(res, score);
    } else if (score > 0) {
      power += tokens[r];
      r--;
      score--;
    } else {
      break;
    }
  }
  return res;
};
