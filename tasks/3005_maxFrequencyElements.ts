interface Frequency {
  [key: number]: number;
}

export const maxFrequencyElements = (nums: number[]): number => {
  const frequencies: Frequency = {};

  for (const num of nums) {
    if (frequencies.hasOwnProperty(num)) {
      frequencies[num]++;
    } else {
      frequencies[num] = 1;
    }
  }

  let max = -1;
  let res = 0;
  for (const key in frequencies) {
    if (frequencies[key] > max) {
      max = frequencies[key];
      res = max;
    } else if (frequencies[key] === max) {
      res += frequencies[key];
    }
  }
  return res;
};
