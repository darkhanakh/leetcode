const successfulPairs = (
  spells: number[],
  potions: number[],
  success: number
): number[] => {
  potions = potions.sort((a, b) => a - b);
  const res: number[] = [];

  for (const s of spells) {
    let l = 0;
    let r = potions.length - 1;
    let idx: number = potions.length;

    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (s * potions[m] >= success) {
        r = m - 1;
        idx = m;
      } else {
        l = m + 1;
      }
    }
    res.push(potions.length - idx);
  }

  return res;
};
